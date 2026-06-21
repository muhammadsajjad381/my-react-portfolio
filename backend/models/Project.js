// models/Project.js
const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    techStack: {
      type: [String], // e.g., ['React', 'Node.js', 'MongoDB']
      required: true,
    },
    imageUrl: {
      type: String,
    },
    liveDemoUrl: {
      type: String,
    },
    repoUrl: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model('Project', ProjectSchema);
