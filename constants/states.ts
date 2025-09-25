import ROUTES from "./routes";

export const DEFAULT_EMPTY = {
  title: "No Data Available",
  message:
    "There’s currently no data in the system. Try adding new entries to get started.",
  button: {
    text: "Add Data",
    href: ROUTES.HOME,
  },
};

export const DEFAULT_ERROR = {
  title: "An Error Occurred",
  message: "Something went wrong on our side. Please try again.",
  button: {
    text: "Retry Request",
    href: ROUTES.HOME,
  },
};

export const EMPTY_QUESTION = {
  title: "No Questions Yet",
  message:
    "It looks like there aren’t any questions. Be the first to ask something interesting!",
  button: {
    text: "Ask a Question",
    href: ROUTES.ASK_QUESTION,
  },
};

export const EMPTY_TAGS = {
  title: "No Tags Found",
  message:
    "There are no tags available. Create some to help categorize your content.",
  button: {
    text: "Create Tag",
    href: ROUTES.TAGS,
  },
};

export const EMPTY_ANSWERS = {
  title: "No Answers Available",
  message: "There aren’t any answers yet. Share your knowledge to help others!",
};

export const EMPTY_COLLECTIONS = {
  title: "Collections Are Empty",
  message:
    "You haven’t saved any collections yet. Start curating content to organize your favorites.",
  button: {
    text: "Save to Collection",
    href: ROUTES.COLLECTION,
  },
};

export const EMPTY_USERS = {
  title: "No Users Found",
  message:
    "There are no users to display at the moment. Check back later as the community grows.",
};
