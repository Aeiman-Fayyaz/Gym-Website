import React, { useState, useEffect } from "react";
import "./App.css";
// AOS ANIMATION
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "./assets/logo.jpg";
import about from "./assets/about.png";
// Core Training Services
import strengthWeightTraining from "./assets/strength-weight-training.jpg";
import cardioTraining from "./assets/cardio-training.jpg";
import hiitWorkouts from "./assets/HIIT-workouts.jpg";
// Personalized Services
import personalTraining from "./assets/personal-training.jpg";
import customizedWorkoutPlans from "./assets/customized-workout-plans.jpg";
import bodyTransformationPrograms from "./assets/body-transformation-programs.jpg";
// Body & Health Management
import fatBurnTraining from "./assets/fat-burn-training.jpg";
import muscleBuildingPrograms from "./assets/muscle-building-programs.jpg";
import weightLossPrograms from "./assets/weight-loss-programs.jpg";
// Additional Service
import nutritionGuidance from "./assets/nutrition-guidance.jpg";
import supplementConsultation from "./assets/supplement-consultation.jpg";
import modernEquipmentAccess from "./assets/modern-equipment-access.jpg";
// Supplements
import preWorkoutSupplement from "./assets/pre-workout.png";
import protein from "./assets/protein.png";
import immunityBooster from "./assets/immunity-booster.png";
// Trainers
import gymHead from "./assets/gym-head.jpg";
import localTrianer from "./assets/local-trianer.jpg";
import personalTrainer from "./assets/personal.jpg";
import femaleTrainer from "./assets/female-personal-trainer.jpg";

export default function App() {
  // AOS ANIMATION
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  // Array Object
  const allProducts = [
    // Core Training Service
    {
      id: 1,
      name: "Strength Weight Training",
      category: "Core Training",
      image: strengthWeightTraining,
      description:
        "Build raw power and muscle with expert-guided weight training",
      price: "$89/month",
    },
    {
      id: 2,
      name: "Cardio Training",
      category: "Core Training",
      image: cardioTraining,
      description: "Improve cardiovascular health and endurance",
      price: "$79/month",
    },
    {
      id: 3,
      name: "HIIT Workouts",
      category: "Core Training",
      image: hiitWorkouts,
      description: "High-intensity interval training for maximum calorie burn",
      price: "$99/month",
    },
    // Personalized Service
    {
      id: 4,
      name: "Personal Training",
      category: "Personalized",
      image: personalTraining,
      description: "One-on-one coaching with certified trainers",
      price: "$299/month",
    },
    {
      id: 5,
      name: "Customized Workout Plans",
      category: "Personalized",
      image: customizedWorkoutPlans,
      description: "Tailored workout plans designed for your goals",
      price: "$149/month",
    },
    {
      id: 6,
      name: "Body Transformation Programs",
      category: "Personalized",
      image: bodyTransformationPrograms,
      description: "Complete transformation programs with guaranteed results",
      price: "$399/month",
    },
    // Body & Health Management
    {
      id: 7,
      name: "Fat Burn Training",
      category: "Health Management",
      image: fatBurnTraining,
      description: "Specialized programs for effective fat burning",
      price: "$129/month",
    },
    {
      id: 8,
      name: "Muscle Building Programs",
      category: "Health Management",
      image: muscleBuildingPrograms,
      description: "Scientific muscle building techniques",
      price: "$159/month",
    },
    {
      id: 9,
      name: "Weight Loss Programs",
      category: "Health Management",
      image: weightLossPrograms,
      description: "Comprehensive weight loss programs with nutrition",
      price: "$199/month",
    },
    {
      id: 10,
      name: "Nutrition Guidance",
      category: "Health Management",
      image: nutritionGuidance,
      description: "Professional nutrition planning and guidance",
      price: "$119/month",
    },
    {
      id: 11,
      name: "Supplement Consultation",
      category: "Health Management",
      image: supplementConsultation,
      description: "Expert advice on supplements and nutrition",
      price: "$89/month",
    },
    // Facilities
    {
      id: 12,
      name: "Modern Equipment Access",
      category: "Facilities",
      image: modernEquipmentAccess,
      description: "Access to state-of-the-art gym equipment",
      price: "$109/month",
    },
    // Supplements
    {
      id: 13,
      name: "Pre Workout Supplement",
      category: "Supplements",
      image: preWorkoutSupplement,
      description: "Premium pre-workout formulas for energy",
      price: "$49/month",
    },
    {
      id: 14,
      name: "Whey Protein",
      category: "Supplements",
      image: protein,
      description: "High-quality protein for muscle recovery",
      price: "$59/month",
    },
    {
      id: 15,
      name: "Immunity Booster",
      category: "Supplements",
      image: immunityBooster,
      description: "Essential vitamins and immunity boosters",
      price: "$39/month",
    },
  ];

  // Trainers Array
  const trainers = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Gym Head & Head Trainer",
      category: "Trainer",
      image: gymHead,
      specialization: "Strength Training, Bodybuilding",
      experience: "10+ years",
    },
    {
      id: 2,
      name: "Mike Rodriguez",
      role: "Local Trainer",
      category: "Trainer",
      image: localTrianer,
      specialization: "Weight Loss, Cardio",
      experience: "7+ years",
    },
    {
      id: 3,
      name: "David Chen",
      role: "Personal Trainer",
      category: "Trainer",
      image: personalTrainer,
      specialization: "Personal Training, Rehabilitation",
      experience: "8+ years",
    },
    {
      id: 4,
      name: "Sarah Williams",
      role: "Female Trainer Specialist",
      category: "Trainer",
      image: femaleTrainer,
      specialization: "Women's Fitness, Yoga",
      experience: "6+ years",
    },
  ];

  // search
  const [search, setSearch] = useState("");
  // Search by category
  const [category, setCategory] = useState("All");
  const [open, setOpen] = useState(false);

  // Get unique categories
  const categories = [
    "All",
    ...new Set(allProducts.map((item) => item.category)),
  ];

  // Filter products based on search and category
  const filteredProducts = allProducts.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || item.category === category;
    return matchesSearch && matchesCategory;
  });

  // Filter trainers based on search
  const filteredTrainers = trainers.filter(
    (trainer) =>
      trainer.name.toLowerCase().includes(search.toLowerCase()) ||
      trainer.role.toLowerCase().includes(search.toLowerCase()) ||
      trainer.specialization.toLowerCase().includes(search.toLowerCase()),
  );

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        open &&
        !event.target.closest(".mobile-menu") &&
        !event.target.closest(".menu-button")
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [open]);

  return (
    <>
      <div className="min-h-screen bg-gray-950">
        {/* NAVBAR START */}
        <nav
          className="fixed w-full z-50 bg-linear-to-b from-black/95 to-black/80 backdrop-blur-xl p-8"
          data-aos="fade-down"
          data-aos-duration="500"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center space-x-3">
                <img
                  src={logo}
                  className="h-14 w-14 rounded-full ring-2 ring-gold-500"
                  alt="Titan Strength Logo"
                />
                <div>
                  <h1 className="text-2xl font-bold bg-linear-to-r from-gold-400 to-gold-600 bg-clip-text text-white">
                    TITAN STRENGTH
                  </h1>
                  <p className="text-xs text-gray-400">
                    Elite Fitness & Performance
                  </p>
                </div>
              </div>

              {/* LARGE SCREEN */}
              <div className="hidden md:flex items-center space-x-8">
                <div className="relative w-64"></div>

                <a
                  href="#home"
                  className="text-white hover:text-amber-500 transition-colors font-medium"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-white hover:text-amber-500 transition-colors font-medium"
                >
                  About
                </a>
                <a
                  href="#services"
                  className="text-white hover:text-amber-500 transition-colors font-medium"
                >
                  Services
                </a>
                <a
                  href="#trainers"
                  className="text-white hover:text-amber-500 transition-colors font-medium"
                >
                  Trainers
                </a>
                <a
                  href="#membership"
                  className="text-white hover:text-amber-500 transition-colors font-medium"
                >
                  Memebership
                </a>

                <input
                  type="text"
                  className="w-full pl-10 pr-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Search services, trainers..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden menu-button"
                onClick={() => setOpen(!open)}
              >
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Menu */}
            {open && (
              <div className="md:hidden mobile-menu absolute top-20 left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-t border-gray-800">
                <div className="px-4 py-4 space-y-4">
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400"
                    placeholder="Search services, trainers..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <div className="space-y-2">
                    <a
                      href="#home"
                      className="block text-white hover:text-amber-500 py-2"
                    >
                      Home
                    </a>
                    <a
                      href="#about"
                      className="block text-white hover:text-amber-500 py-2"
                    >
                      About
                    </a>
                    <a
                      href="#services"
                      className="block text-white hover:text-amber-500 py-2"
                    >
                      Services
                    </a>
                    <a
                      href="#trainers"
                      className="block text-white hover:text-amber-500 py-2"
                    >
                      Trainers
                    </a>
                    <a
                      href="#membership"
                      className="text-white hover:text-amber-500 transition-colors font-medium"
                    >
                      Memebership
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>
        {/* NAVBAR END */}
        {/* HERO SECTION START */}
        <section id="home" className="pt-20">
          <div className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-black/70"></div>
              <iframe
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="https://www.youtube.com/embed/uNN62f55EV0?autoplay=1&mute=1&loop=1&playlist=uNN62f55EV0&controls=0&showinfo=0&rel=0&modestbranding=1"
                title="Gym Motivation Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div
              className="relative z-10 text-center px-4 max-w-6xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-linear-to-r from-amber-400 via-white to-amber-400 bg-clip-text text-transparent">
                  FORGE YOUR LEGEND
                </span>
              </h1>
              <p
                className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Where champions are made. State-of-the-art facilities,
                world-class trainers, and results that speak for themselves.
              </p>
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <a
                  href="#membership"
                  className="bg-linear-to-r from-amber-500 to-amber-800 text-black px-8 py-4 rounded-xl text-lg font-bold hover:from-gold-600 hover:to-gold-700 transition-all transform hover:scale-105"
                >
                  START YOUR JOURNEY
                </a>
                <a
                  href="#services"
                  className="bg-transparent border-2 border-amber-500 text-amber-400 px-8 py-4 rounded-xl text-lg font-bold hover:bg-amber-500/10 transition-all"
                >
                  EXPLORE SERVICES
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* HERO SECTION END */}

        {/* ABOUT SECTION START*/}
        <section id="about" className="py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div
                  data-aos="fade-right"
                  data-aos-offset="100"
                  data-aos-easing="ease-in-sine"
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    <span className="bg-linear-to-r from-amber-600 to-white bg-clip-text text-transparent">
                      ABOUT TITAN STRENGTH
                    </span>
                  </h2>
                  <p className="text-gray-300 text-lg mb-6">
                    Founded in 2015, Titan Strength has become the premier
                    fitness destination for athletes, fitness enthusiasts, and
                    anyone committed to transforming their lives through
                    strength and wellness.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-gold-500/10 p-2 rounded-lg mr-4">
                        <svg
                          className="h-6 w-6 text-gold-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">
                          World-Class Facilities
                        </h4>
                        <p className="text-gray-400">
                          Over 10,000 sq. ft. of premium workout space
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-gold-500/10 p-2 rounded-lg mr-4">
                        <svg
                          className="h-6 w-6 text-gold-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">
                          Certified Trainers
                        </h4>
                        <p className="text-gray-400">
                          Industry-leading professionals with 5+ years
                          experience
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-gold-500/10 p-2 rounded-lg mr-4">
                        <svg
                          className="h-6 w-6 text-gold-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">
                          Proven Results
                        </h4>
                        <p className="text-gray-400">
                          1000+ successful transformations since opening
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="relative"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <img
                  src={about}
                  alt="Titan Strength Gym"
                  className="rounded-2xl shadow-2xl"
                />
                <div
                  className="absolute -bottom-6 -right-6 bg-linear-to-r from-gold-500 to-gold-600 text-black p-6 rounded-2xl shadow-xl"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  <div className="text-3xl font-bold">10K+</div>
                  <div className="text-sm">ACTIVE MEMBERS</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ABOUT SECTION END*/}

        {/* SERVICES SECTION START */}
        <section id="services" className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-linear-to-r from-amber-600 to-white bg-clip-text text-transparent">
                  PREMIUM SERVICES
                </span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Discover our comprehensive range of fitness services designed to
                help you achieve any goal
              </p>
            </div>

            {/* FILTER BY CATEGORY */}
            <div
              className="flex flex-wrap gap-3 justify-center mb-12"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    category === category
                      ? "bg-linear-to-r from-amber-500 to-amber-800 text-black cursor-pointer"
                      : "bg-gray-900 text-gray-300 hover:bg-gray-800"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* If No Data Found */}
            {search && (
              <div className="mb-8 p-6 bg-gray-900/50 rounded-2xl">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Search Results for "{search}"
                </h3>
                {filteredProducts.length === 0 &&
                filteredTrainers.length === 0 ? (
                  <p className="text-gray-400">
                    No results found. Try a different search term.
                  </p>
                ) : (
                  <p className="text-gray-300">
                    Found {filteredProducts.length} services and{" "}
                    {filteredTrainers.length} trainers
                  </p>
                )}
              </div>
            )}

            {/* SERVICES SECTION START */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((service) => (
                <div
                  key={service.id}
                  className="group bg-gray-900 rounded-2xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 border border-gray-800 hover:border-amber-500/30"
                  data-aos="fade-up"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-black/80 text-gold-400 px-3 py-1 rounded-full text-sm font-medium">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {service.name}
                    </h3>
                    <p className="text-gray-400 mb-4">{service.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-gold-400">
                        {service.price}
                      </span>
                      <button className="bg-linear-to-r from-amber-500 to-amber-800 text-white px-6 py-2 rounded-lg font-semibold hover:from-gold-600 hover:to-gold-700 transition-all">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* SERVICES SECTION END */}

            {/* DIV CREATE If No SERVICES FOUND */}
            {filteredProducts.length === 0 && category !== "All" && (
              <div className="text-center py-12">
                <div className="text-gray-400 text-xl mb-4">
                  No services found in this category
                </div>
                <button
                  onClick={() => setCategory("All")}
                  className="text-gold-400 hover:text-gold-300 underline"
                >
                  View all services
                </button>
              </div>
            )}
          </div>
        </section>

        {/* TRAINERS SECTION START */}
        <section id="trainers" className="py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-linear-to-r from-amber-500 to-white bg-clip-text text-transparent">
                  ELITE TRAINERS
                </span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Learn from the best in the industry with our certified
                professional trainers
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredTrainers.map((trainer) => (
                <div
                  key={trainer.id}
                  className="bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300"
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-offset="0"
                >
                  <div className="h-64 overflow-hidden">
                    <img
                      src={trainer.image}
                      alt={trainer.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {trainer.name}
                    </h3>
                    <p className="text-gold-400 font-medium mb-2">
                      {trainer.role}
                    </p>
                    <div className="flex items-center text-gray-400 text-sm mb-3">
                      <svg
                        className="h-4 w-4 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {trainer.experience}
                    </div>
                    <p className="text-gray-300 text-sm mb-4">
                      {trainer.specialization}
                    </p>
                    <button className="w-full bg-linear-to-r from-amber-500 to-amber-800 text-black py-2 rounded-lg font-semibold hover:from-gold-600 hover:to-gold-700 transition-all">
                      Book Session
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {/* TRAINERS SECTION END */}

            {/* IF NO TRAINER FOUND MESSAGE */}
            {search &&
              filteredTrainers.length === 0 &&
              filteredProducts.length > 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-400">
                    No trainers found matching your search. Try a different
                    term.
                  </p>
                </div>
              )}
          </div>
        </section>
        {/* TRAINERS SECTION END */}

        {/* MEMBERSHIP SECTION START */}
        <section id="membership" className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-linear-to-r from-amber-500 to-white bg-clip-text text-transparent">
                  CHOOSE YOUR PLAN
                </span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Flexible membership options designed for every fitness journey
              </p>
            </div>
            {/* PLANNERS */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "BASIC",
                  price: "$49",
                  period: "/month",
                  features: [
                    "Gym Access",
                    "Basic Equipment",
                    "Locker Room",
                    "Free Water",
                  ],
                  color: "from-gray-700 to-gray-800",
                },
                {
                  name: "PRO",
                  price: "$99",
                  period: "/month",
                  features: [
                    "All Basic Features",
                    "Group Classes",
                    "Personal Trainer Discount",
                    "Nutrition Plan",
                    "Sauna Access",
                  ],
                  color: "from-gold-500 to-gold-600",
                  popular: true,
                },
                {
                  name: "ELITE",
                  price: "$199",
                  period: "/month",
                  features: [
                    "All Pro Features",
                    "Unlimited Personal Training",
                    "Private Locker",
                    "Supplement Pack",
                    "24/7 Access",
                    "Monthly Assessment",
                  ],
                  color: "from-gray-700 to-gray-800",
                },
              ].map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-linear-to-br ${plan.color} rounded-2xl p-8 border border-gray-700`}
                  data-aos="flip-up"
                  data-aos-delay={index * 200}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-linear-to-r from-gold-500 to-gold-600 text-black px-6 py-1 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-white">
                      {plan.price}
                    </span>
                    <span className="text-gray-300">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <svg
                          className="h-5 w-5 text-gold-400 mr-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 rounded-lg font-bold transition-all ${
                      plan.popular
                        ? "bg-white text-black hover:bg-gray-100 cursor-pointer "
                        : "bg-linear-to-r from-amber-500 to-amber-800 text-black hover:from-gold-600 hover:to-gold-700 cursor-pointer"
                    }`}
                  >
                    GET STARTED
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* MEMBERSHIP SECTION END */}

        {/* FOOTER SECTION START */}
        <footer
          className="bg-gray-900 text-white py-12"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <img
                    src={logo}
                    className="h-12 w-12 rounded-full"
                    alt="Logo"
                  />
                  <h3 className="text-xl font-bold">TITAN STRENGTH</h3>
                </div>
                <p className="text-gray-400">
                  Transforming lives through fitness, strength, and discipline
                  since 2015.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">QUICK LINKS</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#home"
                      className="text-gray-400 cursor-pointer hover:text-amber-500"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="text-gray-400 cursor-pointer hover:text-amber-500"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="text-gray-400 cursor-pointer hover:text-amber-500"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#trainers"
                      className="text-gray-400 cursor-pointer hover:text-amber-500"
                    >
                      Trainers
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4 cursor-pointer">
                  CONTACT
                </h4>
                <ul className="space-y-2 text-gray-400">
                  <li className="hover:text-amber-500 cursor-pointer">
                    123 Fitness Street
                  </li>
                  <li className="hover:text-amber-500 cursor-pointer">
                    Karachi, Pakistan
                  </li>
                  <li className="hover:text-amber-500 cursor-pointer">
                    +92 336 1234567
                  </li>
                  <li className="hover:text-amber-500 cursor-pointer">
                    info@titanstrength.com
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4 cursor-pointer">
                  HOURS
                </h4>
                <ul className="space-y-2 text-gray-400">
                  <li className="hover:text-amber-500 cursor-pointer">
                    Monday - Friday: 5AM - 11PM
                  </li>
                  <li className="hover:text-amber-500 cursor-pointer">
                    Saturday: 6AM - 10PM
                  </li>
                  <li className="hover:text-amber-500 cursor-pointer">
                    Sunday: 7AM - 9PM
                  </li>
                  <li className="hover:text-amber-500 cursor-pointer">
                    24/7 Access for Elite Members
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>
                Developed by <b className="text-amber-500">Aeiman Fayyaz</b>{" "}
                &copy; 2026 Titan Strength. All rights reserved. | Premium
                Fitness Solutions
              </p>
            </div>
          </div>
        </footer>
        {/* FOOTER SECTION END */}
      </div>
    </>
  );
}
