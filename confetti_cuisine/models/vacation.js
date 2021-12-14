"use strict";

const mongoose = require("mongoose"),
  { Schema } = require("mongoose");

var vacationSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true
    },
    description: {
      type: String,
      required: true
    },
    heroImage: {
      type: String,
      required: true,
      default: "HeroImage.jpg"
    },
    cuisine: {
      type: String,
      enum: ["", "Continental", "Traditional", "Haute-cuisine", "Nouvelle-cuisine", "Fusion", "Vegan", "Vegetarian", "Asian", "Indian", "Middle-Eastern", "African", "Central American", "South American"],
      required: true,
      default: ""
    },
    maxTravelers: {
      type: Number,
      default: 0,
      min: [0, "Vacation packages cannot have a negative number of travelers"],
      max: [25, "Vacation packages cannot have more than 25 travelers"]
    },
    destination: {
      type: String,
      default: "None specified",
      required: true
    },
    departureLocation: {
      type: String,
      required: true,
      enum: ["", "New York (JFK)", "Boston (BOS)", "Chicago (ORD)", "Miami (MIA)", "St. Louis (STL)", "Dallas (DFW)", "Seattle (SEA)", "San Francisco (SFO)"],
      default: ""
    },
    departureDate: {
      type: Date,
      required: true,
      default: Date.now
    },
    returnDate: {
      type: Date,
      required: true,
      default: Date.now
    },
    cost: {
      type: Number,
      default: 0,
      min: [0, "Vacation packages cannot have a negative cost"]
    }
  },
  {
    timestamps: true
  }
);

vacationSchema.path("returnDate").validate(function (value) {
  return (new Date(value)) > (new Date(this.departureDate));
});

module.exports = mongoose.model("Vacation", vacationSchema);
