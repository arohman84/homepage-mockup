// framework
import { useEffect } from "react";
import Router from "next/router";

// Catch & handle global errors
export function handleGlobalRequestErrors(errors) {
  // Authentication error
  if (errors.toString().includes("access_token_expired")) {
    return Router.push(`/api/auth/login?redirectTo${Router.asPath}`);
  }
  // Authentican error 2
  if (errors?.code === "access_token_expired") {
    return Router.push(`/api/auth/login?redirectTo${Router.asPath}`);
  }
}

// camel to sentance
export const camelToSentance = (text = "") =>
  text.replace(/([A-Z]+)/g, " $1").replace(/([A-Z][a-z])/g, " $1");

// CORS
export function initMiddleware(middleware) {
  return (req, res) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
}

// cleanup handle
export const cleanupHandle = (handle) => {
  // trim for spaces
  let char = handle?.trim();
  // remove trailing slash
  if (char.charAt(char?.length - 1) === "/") {
    char = char?.substring(0, char.length - 1);
  }
  // if have @
  if (char.charAt(0) === "@") {
    char = char?.substring(1);
  }
  return char;
};

// K formatter
export const kFormatter = (num, digits = 1) => {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
    : "0";
};

// country code to emoji
export const getFlagEmoji = (countryCode) => {
  const codePoints = countryCode
    ?.toUpperCase()
    ?.split("")
    ?.map((char) => 127397 + char.charCodeAt());
  return String?.fromCodePoint(...codePoints);
};

// format address
export const formatAddress = ({
  name = "",
  line1 = "",
  line2 = "",
  country = "",
  zip = "",
  phone = "",
}) => {
  return `${name?.length > 0 ? `${name}\n` : ""}${
    line1?.length > 0 ? `${line1},\n` : ""
  }${line2 ? `${line2},\n` : ""}${
    country?.name?.length > 0 ? `${country?.name}` : ""
  }${zip?.length > 0 ? `, ${zip}` : ""}\n${
    phone?.number?.length > 0 ? `${phone?.code}-${phone?.number}` : ""
  }`;
};

// get published status text only
export const getPublishedStatusText = (status = "ukn") => {
  switch (status) {
    case -1:
      return "ALL";
    case 0:
      return "ARCHIVED";
    case 1:
      return "DRAFT";
    case 2:
      return "UNPUBLISHED";
    case 3:
      return "PUBLISHED";
    default:
      return "UNKNOWN";
  }
};

// get published status
export const getPublishedStatus = (status = "ukn", size = "regular") => {
  switch (status) {
    case -1:
      return (
        <div
          className={`badge badge-primary ${
            size === "large" ? "badge-lg" : "badge-sm"
          }`}
        >
          <span
            className={
              size === "large"
                ? "text-base px-1 font-semibold leading-none"
                : ""
            }
          >
            ALL
          </span>
        </div>
      );
    case 0:
      return (
        <div
          className={`badge badge-warning ${
            size === "large" ? "badge-lg" : "badge-sm"
          }`}
        >
          <span
            className={
              size === "large"
                ? "text-base px-1 font-semibold leading-none"
                : ""
            }
          >
            {size == "small" ? "ARC" : "ARCHIVED"}
          </span>
        </div>
      );
    case 1:
      return (
        <div
          className={`badge badge-secondary ${
            size === "large" ? "badge-lg" : "badge-sm"
          }`}
        >
          <span
            className={
              size === "large"
                ? "text-base px-1 font-semibold leading-none"
                : ""
            }
          >
            {size == "small" ? "DFT" : "DRAFT"}
          </span>
        </div>
      );
    case 2:
      return (
        <div
          className={`badge badge-warning ${
            size === "large" ? "badge-lg" : "badge-sm"
          }`}
        >
          <span
            className={
              size === "large"
                ? "text-base px-1 font-semibold leading-none"
                : ""
            }
          >
            {size == "small" ? "UNPB" : "UNPUBLISHED"}
          </span>
        </div>
      );
    case 3:
      return (
        <div
          className={`badge badge-primary ${
            size === "large" ? "badge-lg" : "badge-sm"
          }`}
        >
          <span
            className={
              size === "large"
                ? "text-base px-1 font-semibold leading-none"
                : ""
            }
          >
            {size == "small" ? "PB" : "PUBLISHED"}
          </span>
        </div>
      );
    default:
      return (
        <div
          className={`badge badge-info ${
            size === "large" ? "badge-lg" : "badge-sm"
          }`}
        >
          <span
            className={
              size === "large"
                ? "text-base px-1 font-semibold leading-none"
                : ""
            }
          >
            {size == "small" ? "UKWN" : "UNKNOWN"}
          </span>
        </div>
      );
  }
};

// get random int
export const getRandomInt = (minI, maxI) => {
  const min = Math.ceil(minI);
  const max = Math.floor(maxI);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// weight formatter
export const weightFormatter = (weight) => {
  // if no weight
  if (!weight) {
    return "";
  }
  // format
  if (weight <= 500) {
    return `${weight.toFixed(2)} g`;
  } else {
    return `${(weight * 0.001).toFixed(2)} kg`;
  }
};

// curreny format
export const currencyFormatter = new Intl.NumberFormat("en", {
  style: "currency",
  currency: "SGD",
  minimumFractionDigits: 2,
});

// create login URL
export const createLoginUrl = (redirectTo) => {
  if (redirectTo) {
    return `/api/login?redirectTo=${encodeURI(
      `/processing/login?r=${redirectTo}`
    )}`;
  }
  return encodeURI(`/api/login?redirectTo="/processing/login?r=/`);
};

// outslide click detector
export const outslideClickDetect = (ref, onClick = () => {}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    // on outside click
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClick();
      }
    };
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};

// detect window scroll
export const windowScrollDetect = (onScroll = () => {}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    // on outside click
    const handleScroll = () => {
      onScroll();
    };
    // Bind the event listener
    document.addEventListener("scroll", handleScroll);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("scroll", handleScroll);
    };
  }, [0]);
};

// slug to title
export const slugToName = (slug = "") => {
  var words = slug.split("-");
  return words
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
    })
    .join(" ");
};

// title to slug
export const titleToSlug = (Text) =>
  Text.toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");

// timeout delay
export const timeoutDelay = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// dataurl to blob
export function dataURLtoBlob(dataurl) {
  var arr = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
}

/**------------------------------------------------------------------------
 **                           SHUFFLE ARRAY
 *?  shuffle Array
 *@param array array
 *@return array
 *------------------------------------------------------------------------**/
export const shuffleArray = (array) => {
  var currentIndex = array.length,
    randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

// set localStorage with expiry
export const setLocalStorageWithExpiry = (key, value, ttl) => {
  try {
    const now = new Date();
    const item = {
      value,
      expiry: now.setDate(now.getDate() + ttl),
    };
    // set item
    localStorage.setItem(key, JSON.stringify(item));
  } catch (e) {}
};

// get localStorage with expiry
export const getLocalStorageWithExpiry = (key) => {
  try {
    const itemStr = localStorage.getItem(key);
    // if the item doesn't exist, return null
    if (!itemStr) {
      return null;
    }
    const item = JSON.parse(itemStr);
    const now = new Date();
    const expiry = new Date(item?.expiry);
    // compare the expiry time of the item with the current time
    if (now > expiry) {
      // and return null
      localStorage.removeItem(key);
      return null;
    }
    return item.value;
  } catch (e) {}
};

export const formatQuota = (d) => {
  const size = d / 1000;
  return size > 0 ? `${size} GB` : `${size * 1000} MB`;
};
export const formatPrice = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
