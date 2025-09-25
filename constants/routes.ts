const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  ASK_QUESTION: "/ask-a-question",
  COLLECTION: "/collections",
  COMMUNITY: "/community",
  TAGS: "/tags",
  SIGN_IN_WITH_OAUTH: "signin-with-oauth",
  // QUESTION: (id: string) => `/ask-a-question/${id}`,

  QUESTION: (id: string) => `/questions/${id}`,
  PROFILE: (id: string) => `/profile/${id}`,
  TAG: (id: string) => `/tags/${id}`,
};

export default ROUTES;
