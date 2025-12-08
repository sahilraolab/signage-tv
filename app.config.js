export default ({ config }) => {
  return {
    ...config,
    extra: {
      BASE_URL:
        process.env.APP_ENV === "production"
          ? "https://api.techseventeen.com"
          : "http://localhost:5000"
    }
  };
};
