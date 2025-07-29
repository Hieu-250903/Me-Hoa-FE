import delay from "delay";
import debounce from "p-debounce";

export const isUsernameAvailable = debounce(async username => {
  await delay(500);
  return username.length >= 5;
}, 300);
