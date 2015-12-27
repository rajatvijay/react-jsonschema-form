module.exports = {
  schema: {
    title: "A simple todo entry",
    type: "object",
    required: ["title"],
    properties: {
      title: {type: "string", title: "Title", default: "A new task"},
      done: {type: "boolean", title: "Done?", default: false}
    }
  },
  uiSchema: {
    done: {
      widget: "radio"
    }
  },
  formData: {
    title: "My task",
    done: false
  }
};
