const initState = {
  projects: [
    { id: 1, title: "help others", content: "nothing" },
    { id: 2, title: "help yourself", content: "nothing" },
    { id: 3, title: "help everyone", content: "nothing" }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("project created", action.project);
  }

  return state;
};

export default projectReducer;
