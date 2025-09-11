const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  QUESTION: (id: string) => `/ask-a-question/${id}`,
  PROFILE: (id: string) => `/profile/${id}`,
  TAGS: (id: string) => `/tags/${id}`,
  ASK_QUESTION: "/ask-a-question",
};

export default ROUTES;
