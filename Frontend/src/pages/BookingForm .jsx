import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";

 
const services = [
  { name: "Tour Package", price: 0 },
  { name: "Hotel Room", price: 0 },
  { name: "Vehicle Booking", price: 0 },
];

const steps = ["Personal Info", "Booking Details", "Payment", "Review"];


const AdvancedBookingWizard = () => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    guests: 1,
    specialNotes: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    payLater: false,
  });
  const [errors, setErrors] = useState({});

  const blockInvalidKeys = {
    name: (e) => {
      if (!/^[A-Za-z\s]$/.test(e.key) && e.key !== "Backspace") e.preventDefault();
    },
    numberOnly: (e) => {
      if (!/[0-9]/.test(e.key) && e.key !== "Backspace") e.preventDefault();
    },
    expiry: (e) => {
      if (!/[0-9/]/.test(e.key) && e.key !== "Backspace") e.preventDefault();
    },
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleGuests = (val) => {
    setData((prev) => ({
      ...prev,
      guests: Math.max(1, prev.guests + val),
    }));
  };

  const validateStep = () => {
    let stepErrors = {};

    if (step === 0) {
      if (!data.name) stepErrors.name = "Name is required";
      if (!data.email.match(/^\S+@\S+\.\S+$/)) stepErrors.email = "Invalid email";
      if (!data.phone.match(/^[0-9]{10,}$/)) stepErrors.phone = "Invalid phone";
    }

    if (step === 1 && !data.service) stepErrors.service = "Select a service";

    // Payment validation can be added if needed
    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) setStep((prev) => prev + 1);
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const getTotalPrice = () => {
    const serviceObj = services.find((s) => s.name === data.service);
    return serviceObj ? serviceObj.price * data.guests : 0;
  };

  // ✅ Move sendBookingEmail inside the component
  const sendBookingEmail = () => {
    const templateParams = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      service: data.service,
      date: data.date,
      time: data.time,
      guests: data.guests,
      notes: data.specialNotes || "No notes added",
      payment: data.payLater ? "Pay Later / Cash on Arrival" : "Card Payment",
      total: getTotalPrice(),
    };

    emailjs
      .send(
        "service_ixwmqt5",
        "template_rwyii24",
        templateParams,
        "-MTJEE6Jjw5sZMNmw"
      )
       .then(
              () => {
                toast.success("Message sent successfully!", {
                  position: "top-center",
                  autoClose: 4000,
                  style: {
                    background: "#facc15", 
                    color: "#000000",
                    fontWeight: "bold",
                    fontSize: "16px",
                  },
                  icon: "✅",
                  
                });
                
              },
   (error) => {
           toast.error("❌ Failed to send message. Please try again.", {
             position: "bottom-center",
             autoClose: 4000,
             style: { background: "#FF4C4C", color: "#fff", fontWeight: "bold" },
             progressStyle: { background: "#facc15" },
             icon: "⚠️",
           });
         }
       );
   };

  const animatedDiv = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
    transition: { duration: 0.4 },
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center bg-cover bg-center p-5"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1526717/pexels-photo-1526717.jpeg')",
      }}
    >
      <ToastContainer />
      <div className="g-white/10 backdrop-blur-md shadow-2xl rounded-3xl w-full max-w-3xl p-8 hover:bg-yellow-400/20 transition">
        {/* Progress bar */}
        <div className="flex items-center mb-8">
          {steps.map((label, i) => (
            <div key={i} className="flex-1 text-center">
              <div
                className={`w-8 h-8 mx-auto rounded-full ${
                  i <= step ? "bg-yellow-400 text-black" : "bg-gray-300 text-gray-500"
                } flex items-center justify-center font-bold`}
              >
                {i + 1}
              </div>
              <p className={`text-sm mt-1 ${i <= step ? "text-black" : "text-gray-400"}`}>{label}</p>
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {/* Step 0: Personal Info */}
          {step === 0 && (
            <motion.div {...animatedDiv} key="step0">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Personal Info</h2>
              <div className="space-y-4 text-black">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    onKeyDown={blockInvalidKeys.name}
                    placeholder="Full Name"
                    className="w-full px-4 py-3 border rounded-lg peer"
                  />
                  
                  {errors.name && <p className="text-red-700 text-sm">{errors.name}</p>}
                </div>
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border rounded-lg"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                <input
                  type="tel"
                  name="phone"
                  value={data.phone}
                  onChange={handleChange}
                  onKeyDown={blockInvalidKeys.numberOnly}
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border rounded-lg"
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>
              <button onClick={nextStep} className="mt-6 w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-xl shadow-lg transition-all">
                Next
              </button>
            </motion.div>
          )}

          {/* Step 1: Booking Details */}
          {step === 1 && (
            <motion.div {...animatedDiv} key="step1">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Booking Details</h2>
              <div className="space-y-4">
                <select name="service" value={data.service} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg text-black">
                  <option value="">Select Service</option>
                  {services.map((s) => (
                    <option key={s.name} value={s.name}>
                      {s.name} (${s.price})
                    </option>
                  ))}
                </select>
                {errors.service && <p className="text-red-500 text-sm">{errors.service}</p>}
                <input type="date" name="date" value={data.date} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg text-black" />
                <input type="time" name="time" value={data.time} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg text-black" />
                <div className="flex items-center gap-3">
                  <button type="button" onClick={() => handleGuests(-1)} className="px-3 py-1 bg-gray-500 rounded">-</button>
                  <span>{data.guests} Guest(s)</span>
                  <button type="button" onClick={() => handleGuests(1)} className="px-3 py-1 bg-gray-500 rounded">+</button>
                </div>
                <textarea name="specialNotes" value={data.specialNotes} onChange={handleChange} placeholder="Special Notes" className="w-full px-4 py-3 border rounded-lg resize-none text-black" />
              </div>
              <div className="flex justify-between mt-6">
                <button onClick={prevStep} className="px-6 py-3 bg-gray-500 rounded-xl font-bold">Back</button>
                <button onClick={nextStep} className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black rounded-xl font-bold">Next</button>
              </div>
            </motion.div>
          )}

          {/* Step 2: Payment */}
          {step === 2 && (
            <motion.div {...animatedDiv} key="step2">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Payment</h2>
              <div className="flex items-center mb-4">
                <input type="checkbox" name="payLater" 
                checked={data.payLater}
                 onChange={() => setData({ ...data, payLater: !data.payLater })} className="mr-2" />
                <span>Pay Later / Cash on Arrival</span>
              </div>
              {!data.payLater && (
                <div className="space-y-3 bg-gray-100 p-6 rounded-xl border">
                  <input type="text" name="cardNumber" value={data.cardNumber} onChange={handleChange} placeholder="Card Number" className="w-full px-4 py-3 border rounded-lg text-black" />
                  {/* {errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber}</p>} */}
                  <div className="grid grid-cols-2 gap-3">
                    <input type="text" name="expiry" value={data.expiry} onChange={handleChange} placeholder="MM/YY" className="w-full px-4 py-3 border rounded-lg text-black" />
                    {/* {errors.expiry && <p className="text-red-500 text-sm">{errors.expiry}</p>} */}
                    <input type="text" name="cvv" value={data.cvv} onChange={handleChange} placeholder="CVV" className="w-full px-4 py-3 border rounded-lg text-black" />
                    {/* {errors.cvv && <p className="text-red-500 text-sm">{errors.cvv}</p>} */}
                  </div>
                </div>
              )}
              <div className="flex justify-between mt-6">
                <button onClick={prevStep} className="px-6 py-3 bg-gray-500 rounded-xl font-bold">Back</button>
                <button onClick={nextStep} className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black rounded-xl font-bold">Next</button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Review */}
     {step === 3 && (
  <motion.div {...animatedDiv} key="step3">
    <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
      Review & Confirm Your Booking
    </h2>

    <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl space-y-6 border">

      {/* Personal Info */}
      <div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Personal Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-800">
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Phone:</strong> {data.phone}</p>
        </div>
      </div>

      {/* Booking Details */}
      <div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Booking Details</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-800">
          <p><strong>Service:</strong> {data.service}</p>
          <p><strong>Date:</strong> {data.date}</p>
          <p><strong>Time:</strong> {data.time}</p>
          <p><strong>Guests:</strong> {data.guests}</p>
        </div>

        {data.specialNotes && (
          <p className="mt-2 text-black">
            <strong>Notes:</strong> {data.specialNotes}
          </p>
        )}
      </div>

      {/* Payment */}
      <div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Payment Details</h3>
        <p className="text-gray-800">
          <strong>Payment Method:</strong>{" "}
          {data.payLater ? "Pay Later / Cash on Arrival" : "Card Payment"}
        </p>
      </div>

      {/* Total Box */}
      <div className="bg-yellow-400 text-black p-5 rounded-xl shadow-lg text-center">
        <h3 className="text-xl font-bold">Total Amount</h3>
        <p className="text-3xl font-extrabold mt-1">${getTotalPrice()}</p>
      </div>
      
    </div>

    <button
     onClick={sendBookingEmail}
      className="w-full mt-6 py-3 bg-green-600 text-white font-bold rounded-xl shadow-lg hover:bg-green-700 hover:shadow-xl transition-all"
    >
      Confirm Booking
    </button>
  </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AdvancedBookingWizard;
