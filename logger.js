const COLOR_GREEN_FONT = `\x1b[32m`;
const COLOR_YELLOW_FONT = `\x1b[33m`;
const COLOR_GRAY_FONT = `\x1b[2m`;
const COLOR_LINK_FONT = "\x1b[34m\x1b[4m";
const COLOR_RED_FONT = "\x1b[31m";

const RESET_COLOR = "\x1b[0m";

const isSupported =
  process.platform !== "win32" || process.env.CI || process.env.TERM === "xterm-256color";

const iconSet = isSupported
  ? {
      success: "✔",
      error: "✖"
    }
  : {
      success: "√",
      error: "×"
    };

const logger = {
  _colored: function(color, ...args) {
    this.default(color, ...args, RESET_COLOR);
  },

  _coloredIcon: function(color, icon, ...args) {
    this.default(color, icon, RESET_COLOR, ...args);
  },

  default: (...args) => {
    console.log(...args);
  },

  successIcon: function(...args) {
    this._coloredIcon(COLOR_GREEN_FONT, iconSet.success, ...args);
  },

  errorIcon: function(...args) {
    this._coloredIcon(COLOR_RED_FONT, iconSet.error, ...args);
  },

  yellow: function(...args) {
    this._colored(COLOR_YELLOW_FONT, ...args);
  },

  green: function(...args) {
    this._colored(COLOR_GREEN_FONT, ...args);
  },

  red: function(...args) {
    this._colored(COLOR_RED_FONT, ...args);
  },

  gray: function(...args) {
    this._colored(COLOR_GRAY_FONT, ...args);
  },

  link: function(...args) {
    this._colored(COLOR_LINK_FONT, ...args);
  }
};

module.exports = {
  logger
};
