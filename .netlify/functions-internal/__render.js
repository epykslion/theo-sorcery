var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// .svelte-kit/netlify/entry.js
__export(exports, {
  handler: () => handler
});

// node_modules/.pnpm/@sveltejs+kit@1.0.0-next.164_svelte@3.42.4/node_modules/@sveltejs/kit/dist/install-fetch.js
var import_http = __toModule(require("http"));
var import_https = __toModule(require("https"));
var import_zlib = __toModule(require("zlib"));
var import_stream = __toModule(require("stream"));
var import_util = __toModule(require("util"));
var import_crypto = __toModule(require("crypto"));
var import_url = __toModule(require("url"));
function dataUriToBuffer(uri) {
  if (!/^data:/i.test(uri)) {
    throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');
  }
  uri = uri.replace(/\r?\n/g, "");
  const firstComma = uri.indexOf(",");
  if (firstComma === -1 || firstComma <= 4) {
    throw new TypeError("malformed data: URI");
  }
  const meta = uri.substring(5, firstComma).split(";");
  let charset = "";
  let base64 = false;
  const type = meta[0] || "text/plain";
  let typeFull = type;
  for (let i = 1; i < meta.length; i++) {
    if (meta[i] === "base64") {
      base64 = true;
    } else {
      typeFull += `;${meta[i]}`;
      if (meta[i].indexOf("charset=") === 0) {
        charset = meta[i].substring(8);
      }
    }
  }
  if (!meta[0] && !charset.length) {
    typeFull += ";charset=US-ASCII";
    charset = "US-ASCII";
  }
  const encoding = base64 ? "base64" : "ascii";
  const data = unescape(uri.substring(firstComma + 1));
  const buffer = Buffer.from(data, encoding);
  buffer.type = type;
  buffer.typeFull = typeFull;
  buffer.charset = charset;
  return buffer;
}
var src = dataUriToBuffer;
var dataUriToBuffer$1 = src;
var { Readable } = import_stream.default;
var wm = new WeakMap();
async function* read(parts) {
  for (const part of parts) {
    if ("stream" in part) {
      yield* part.stream();
    } else {
      yield part;
    }
  }
}
var Blob = class {
  constructor(blobParts = [], options2 = {}) {
    let size = 0;
    const parts = blobParts.map((element) => {
      let buffer;
      if (element instanceof Buffer) {
        buffer = element;
      } else if (ArrayBuffer.isView(element)) {
        buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
      } else if (element instanceof ArrayBuffer) {
        buffer = Buffer.from(element);
      } else if (element instanceof Blob) {
        buffer = element;
      } else {
        buffer = Buffer.from(typeof element === "string" ? element : String(element));
      }
      size += buffer.length || buffer.size || 0;
      return buffer;
    });
    const type = options2.type === void 0 ? "" : String(options2.type).toLowerCase();
    wm.set(this, {
      type: /[^\u0020-\u007E]/.test(type) ? "" : type,
      size,
      parts
    });
  }
  get size() {
    return wm.get(this).size;
  }
  get type() {
    return wm.get(this).type;
  }
  async text() {
    return Buffer.from(await this.arrayBuffer()).toString();
  }
  async arrayBuffer() {
    const data = new Uint8Array(this.size);
    let offset = 0;
    for await (const chunk of this.stream()) {
      data.set(chunk, offset);
      offset += chunk.length;
    }
    return data.buffer;
  }
  stream() {
    return Readable.from(read(wm.get(this).parts));
  }
  slice(start = 0, end = this.size, type = "") {
    const { size } = this;
    let relativeStart = start < 0 ? Math.max(size + start, 0) : Math.min(start, size);
    let relativeEnd = end < 0 ? Math.max(size + end, 0) : Math.min(end, size);
    const span = Math.max(relativeEnd - relativeStart, 0);
    const parts = wm.get(this).parts.values();
    const blobParts = [];
    let added = 0;
    for (const part of parts) {
      const size2 = ArrayBuffer.isView(part) ? part.byteLength : part.size;
      if (relativeStart && size2 <= relativeStart) {
        relativeStart -= size2;
        relativeEnd -= size2;
      } else {
        const chunk = part.slice(relativeStart, Math.min(size2, relativeEnd));
        blobParts.push(chunk);
        added += ArrayBuffer.isView(chunk) ? chunk.byteLength : chunk.size;
        relativeStart = 0;
        if (added >= span) {
          break;
        }
      }
    }
    const blob = new Blob([], { type: String(type).toLowerCase() });
    Object.assign(wm.get(blob), { size: span, parts: blobParts });
    return blob;
  }
  get [Symbol.toStringTag]() {
    return "Blob";
  }
  static [Symbol.hasInstance](object) {
    return object && typeof object === "object" && typeof object.stream === "function" && object.stream.length === 0 && typeof object.constructor === "function" && /^(Blob|File)$/.test(object[Symbol.toStringTag]);
  }
};
Object.defineProperties(Blob.prototype, {
  size: { enumerable: true },
  type: { enumerable: true },
  slice: { enumerable: true }
});
var fetchBlob = Blob;
var Blob$1 = fetchBlob;
var FetchBaseError = class extends Error {
  constructor(message, type) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
    this.type = type;
  }
  get name() {
    return this.constructor.name;
  }
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }
};
var FetchError = class extends FetchBaseError {
  constructor(message, type, systemError) {
    super(message, type);
    if (systemError) {
      this.code = this.errno = systemError.code;
      this.erroredSysCall = systemError.syscall;
    }
  }
};
var NAME = Symbol.toStringTag;
var isURLSearchParameters = (object) => {
  return typeof object === "object" && typeof object.append === "function" && typeof object.delete === "function" && typeof object.get === "function" && typeof object.getAll === "function" && typeof object.has === "function" && typeof object.set === "function" && typeof object.sort === "function" && object[NAME] === "URLSearchParams";
};
var isBlob = (object) => {
  return typeof object === "object" && typeof object.arrayBuffer === "function" && typeof object.type === "string" && typeof object.stream === "function" && typeof object.constructor === "function" && /^(Blob|File)$/.test(object[NAME]);
};
function isFormData(object) {
  return typeof object === "object" && typeof object.append === "function" && typeof object.set === "function" && typeof object.get === "function" && typeof object.getAll === "function" && typeof object.delete === "function" && typeof object.keys === "function" && typeof object.values === "function" && typeof object.entries === "function" && typeof object.constructor === "function" && object[NAME] === "FormData";
}
var isAbortSignal = (object) => {
  return typeof object === "object" && object[NAME] === "AbortSignal";
};
var carriage = "\r\n";
var dashes = "-".repeat(2);
var carriageLength = Buffer.byteLength(carriage);
var getFooter = (boundary) => `${dashes}${boundary}${dashes}${carriage.repeat(2)}`;
function getHeader(boundary, name, field) {
  let header = "";
  header += `${dashes}${boundary}${carriage}`;
  header += `Content-Disposition: form-data; name="${name}"`;
  if (isBlob(field)) {
    header += `; filename="${field.name}"${carriage}`;
    header += `Content-Type: ${field.type || "application/octet-stream"}`;
  }
  return `${header}${carriage.repeat(2)}`;
}
var getBoundary = () => (0, import_crypto.randomBytes)(8).toString("hex");
async function* formDataIterator(form, boundary) {
  for (const [name, value] of form) {
    yield getHeader(boundary, name, value);
    if (isBlob(value)) {
      yield* value.stream();
    } else {
      yield value;
    }
    yield carriage;
  }
  yield getFooter(boundary);
}
function getFormDataLength(form, boundary) {
  let length = 0;
  for (const [name, value] of form) {
    length += Buffer.byteLength(getHeader(boundary, name, value));
    if (isBlob(value)) {
      length += value.size;
    } else {
      length += Buffer.byteLength(String(value));
    }
    length += carriageLength;
  }
  length += Buffer.byteLength(getFooter(boundary));
  return length;
}
var INTERNALS$2 = Symbol("Body internals");
var Body = class {
  constructor(body, {
    size = 0
  } = {}) {
    let boundary = null;
    if (body === null) {
      body = null;
    } else if (isURLSearchParameters(body)) {
      body = Buffer.from(body.toString());
    } else if (isBlob(body))
      ;
    else if (Buffer.isBuffer(body))
      ;
    else if (import_util.types.isAnyArrayBuffer(body)) {
      body = Buffer.from(body);
    } else if (ArrayBuffer.isView(body)) {
      body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
    } else if (body instanceof import_stream.default)
      ;
    else if (isFormData(body)) {
      boundary = `NodeFetchFormDataBoundary${getBoundary()}`;
      body = import_stream.default.Readable.from(formDataIterator(body, boundary));
    } else {
      body = Buffer.from(String(body));
    }
    this[INTERNALS$2] = {
      body,
      boundary,
      disturbed: false,
      error: null
    };
    this.size = size;
    if (body instanceof import_stream.default) {
      body.on("error", (err) => {
        const error2 = err instanceof FetchBaseError ? err : new FetchError(`Invalid response body while trying to fetch ${this.url}: ${err.message}`, "system", err);
        this[INTERNALS$2].error = error2;
      });
    }
  }
  get body() {
    return this[INTERNALS$2].body;
  }
  get bodyUsed() {
    return this[INTERNALS$2].disturbed;
  }
  async arrayBuffer() {
    const { buffer, byteOffset, byteLength } = await consumeBody(this);
    return buffer.slice(byteOffset, byteOffset + byteLength);
  }
  async blob() {
    const ct = this.headers && this.headers.get("content-type") || this[INTERNALS$2].body && this[INTERNALS$2].body.type || "";
    const buf = await this.buffer();
    return new Blob$1([buf], {
      type: ct
    });
  }
  async json() {
    const buffer = await consumeBody(this);
    return JSON.parse(buffer.toString());
  }
  async text() {
    const buffer = await consumeBody(this);
    return buffer.toString();
  }
  buffer() {
    return consumeBody(this);
  }
};
Object.defineProperties(Body.prototype, {
  body: { enumerable: true },
  bodyUsed: { enumerable: true },
  arrayBuffer: { enumerable: true },
  blob: { enumerable: true },
  json: { enumerable: true },
  text: { enumerable: true }
});
async function consumeBody(data) {
  if (data[INTERNALS$2].disturbed) {
    throw new TypeError(`body used already for: ${data.url}`);
  }
  data[INTERNALS$2].disturbed = true;
  if (data[INTERNALS$2].error) {
    throw data[INTERNALS$2].error;
  }
  let { body } = data;
  if (body === null) {
    return Buffer.alloc(0);
  }
  if (isBlob(body)) {
    body = body.stream();
  }
  if (Buffer.isBuffer(body)) {
    return body;
  }
  if (!(body instanceof import_stream.default)) {
    return Buffer.alloc(0);
  }
  const accum = [];
  let accumBytes = 0;
  try {
    for await (const chunk of body) {
      if (data.size > 0 && accumBytes + chunk.length > data.size) {
        const err = new FetchError(`content size at ${data.url} over limit: ${data.size}`, "max-size");
        body.destroy(err);
        throw err;
      }
      accumBytes += chunk.length;
      accum.push(chunk);
    }
  } catch (error2) {
    if (error2 instanceof FetchBaseError) {
      throw error2;
    } else {
      throw new FetchError(`Invalid response body while trying to fetch ${data.url}: ${error2.message}`, "system", error2);
    }
  }
  if (body.readableEnded === true || body._readableState.ended === true) {
    try {
      if (accum.every((c) => typeof c === "string")) {
        return Buffer.from(accum.join(""));
      }
      return Buffer.concat(accum, accumBytes);
    } catch (error2) {
      throw new FetchError(`Could not create Buffer from response body for ${data.url}: ${error2.message}`, "system", error2);
    }
  } else {
    throw new FetchError(`Premature close of server response while trying to fetch ${data.url}`);
  }
}
var clone = (instance, highWaterMark) => {
  let p1;
  let p2;
  let { body } = instance;
  if (instance.bodyUsed) {
    throw new Error("cannot clone body after it is used");
  }
  if (body instanceof import_stream.default && typeof body.getBoundary !== "function") {
    p1 = new import_stream.PassThrough({ highWaterMark });
    p2 = new import_stream.PassThrough({ highWaterMark });
    body.pipe(p1);
    body.pipe(p2);
    instance[INTERNALS$2].body = p1;
    body = p2;
  }
  return body;
};
var extractContentType = (body, request) => {
  if (body === null) {
    return null;
  }
  if (typeof body === "string") {
    return "text/plain;charset=UTF-8";
  }
  if (isURLSearchParameters(body)) {
    return "application/x-www-form-urlencoded;charset=UTF-8";
  }
  if (isBlob(body)) {
    return body.type || null;
  }
  if (Buffer.isBuffer(body) || import_util.types.isAnyArrayBuffer(body) || ArrayBuffer.isView(body)) {
    return null;
  }
  if (body && typeof body.getBoundary === "function") {
    return `multipart/form-data;boundary=${body.getBoundary()}`;
  }
  if (isFormData(body)) {
    return `multipart/form-data; boundary=${request[INTERNALS$2].boundary}`;
  }
  if (body instanceof import_stream.default) {
    return null;
  }
  return "text/plain;charset=UTF-8";
};
var getTotalBytes = (request) => {
  const { body } = request;
  if (body === null) {
    return 0;
  }
  if (isBlob(body)) {
    return body.size;
  }
  if (Buffer.isBuffer(body)) {
    return body.length;
  }
  if (body && typeof body.getLengthSync === "function") {
    return body.hasKnownLength && body.hasKnownLength() ? body.getLengthSync() : null;
  }
  if (isFormData(body)) {
    return getFormDataLength(request[INTERNALS$2].boundary);
  }
  return null;
};
var writeToStream = (dest, { body }) => {
  if (body === null) {
    dest.end();
  } else if (isBlob(body)) {
    body.stream().pipe(dest);
  } else if (Buffer.isBuffer(body)) {
    dest.write(body);
    dest.end();
  } else {
    body.pipe(dest);
  }
};
var validateHeaderName = typeof import_http.default.validateHeaderName === "function" ? import_http.default.validateHeaderName : (name) => {
  if (!/^[\^`\-\w!#$%&'*+.|~]+$/.test(name)) {
    const err = new TypeError(`Header name must be a valid HTTP token [${name}]`);
    Object.defineProperty(err, "code", { value: "ERR_INVALID_HTTP_TOKEN" });
    throw err;
  }
};
var validateHeaderValue = typeof import_http.default.validateHeaderValue === "function" ? import_http.default.validateHeaderValue : (name, value) => {
  if (/[^\t\u0020-\u007E\u0080-\u00FF]/.test(value)) {
    const err = new TypeError(`Invalid character in header content ["${name}"]`);
    Object.defineProperty(err, "code", { value: "ERR_INVALID_CHAR" });
    throw err;
  }
};
var Headers = class extends URLSearchParams {
  constructor(init2) {
    let result = [];
    if (init2 instanceof Headers) {
      const raw = init2.raw();
      for (const [name, values] of Object.entries(raw)) {
        result.push(...values.map((value) => [name, value]));
      }
    } else if (init2 == null)
      ;
    else if (typeof init2 === "object" && !import_util.types.isBoxedPrimitive(init2)) {
      const method = init2[Symbol.iterator];
      if (method == null) {
        result.push(...Object.entries(init2));
      } else {
        if (typeof method !== "function") {
          throw new TypeError("Header pairs must be iterable");
        }
        result = [...init2].map((pair) => {
          if (typeof pair !== "object" || import_util.types.isBoxedPrimitive(pair)) {
            throw new TypeError("Each header pair must be an iterable object");
          }
          return [...pair];
        }).map((pair) => {
          if (pair.length !== 2) {
            throw new TypeError("Each header pair must be a name/value tuple");
          }
          return [...pair];
        });
      }
    } else {
      throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");
    }
    result = result.length > 0 ? result.map(([name, value]) => {
      validateHeaderName(name);
      validateHeaderValue(name, String(value));
      return [String(name).toLowerCase(), String(value)];
    }) : void 0;
    super(result);
    return new Proxy(this, {
      get(target, p, receiver) {
        switch (p) {
          case "append":
          case "set":
            return (name, value) => {
              validateHeaderName(name);
              validateHeaderValue(name, String(value));
              return URLSearchParams.prototype[p].call(receiver, String(name).toLowerCase(), String(value));
            };
          case "delete":
          case "has":
          case "getAll":
            return (name) => {
              validateHeaderName(name);
              return URLSearchParams.prototype[p].call(receiver, String(name).toLowerCase());
            };
          case "keys":
            return () => {
              target.sort();
              return new Set(URLSearchParams.prototype.keys.call(target)).keys();
            };
          default:
            return Reflect.get(target, p, receiver);
        }
      }
    });
  }
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }
  toString() {
    return Object.prototype.toString.call(this);
  }
  get(name) {
    const values = this.getAll(name);
    if (values.length === 0) {
      return null;
    }
    let value = values.join(", ");
    if (/^content-encoding$/i.test(name)) {
      value = value.toLowerCase();
    }
    return value;
  }
  forEach(callback) {
    for (const name of this.keys()) {
      callback(this.get(name), name);
    }
  }
  *values() {
    for (const name of this.keys()) {
      yield this.get(name);
    }
  }
  *entries() {
    for (const name of this.keys()) {
      yield [name, this.get(name)];
    }
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  raw() {
    return [...this.keys()].reduce((result, key) => {
      result[key] = this.getAll(key);
      return result;
    }, {});
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return [...this.keys()].reduce((result, key) => {
      const values = this.getAll(key);
      if (key === "host") {
        result[key] = values[0];
      } else {
        result[key] = values.length > 1 ? values : values[0];
      }
      return result;
    }, {});
  }
};
Object.defineProperties(Headers.prototype, ["get", "entries", "forEach", "values"].reduce((result, property) => {
  result[property] = { enumerable: true };
  return result;
}, {}));
function fromRawHeaders(headers = []) {
  return new Headers(headers.reduce((result, value, index2, array) => {
    if (index2 % 2 === 0) {
      result.push(array.slice(index2, index2 + 2));
    }
    return result;
  }, []).filter(([name, value]) => {
    try {
      validateHeaderName(name);
      validateHeaderValue(name, String(value));
      return true;
    } catch {
      return false;
    }
  }));
}
var redirectStatus = new Set([301, 302, 303, 307, 308]);
var isRedirect = (code) => {
  return redirectStatus.has(code);
};
var INTERNALS$1 = Symbol("Response internals");
var Response = class extends Body {
  constructor(body = null, options2 = {}) {
    super(body, options2);
    const status = options2.status || 200;
    const headers = new Headers(options2.headers);
    if (body !== null && !headers.has("Content-Type")) {
      const contentType = extractContentType(body);
      if (contentType) {
        headers.append("Content-Type", contentType);
      }
    }
    this[INTERNALS$1] = {
      url: options2.url,
      status,
      statusText: options2.statusText || "",
      headers,
      counter: options2.counter,
      highWaterMark: options2.highWaterMark
    };
  }
  get url() {
    return this[INTERNALS$1].url || "";
  }
  get status() {
    return this[INTERNALS$1].status;
  }
  get ok() {
    return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
  }
  get redirected() {
    return this[INTERNALS$1].counter > 0;
  }
  get statusText() {
    return this[INTERNALS$1].statusText;
  }
  get headers() {
    return this[INTERNALS$1].headers;
  }
  get highWaterMark() {
    return this[INTERNALS$1].highWaterMark;
  }
  clone() {
    return new Response(clone(this, this.highWaterMark), {
      url: this.url,
      status: this.status,
      statusText: this.statusText,
      headers: this.headers,
      ok: this.ok,
      redirected: this.redirected,
      size: this.size
    });
  }
  static redirect(url, status = 302) {
    if (!isRedirect(status)) {
      throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
    }
    return new Response(null, {
      headers: {
        location: new URL(url).toString()
      },
      status
    });
  }
  get [Symbol.toStringTag]() {
    return "Response";
  }
};
Object.defineProperties(Response.prototype, {
  url: { enumerable: true },
  status: { enumerable: true },
  ok: { enumerable: true },
  redirected: { enumerable: true },
  statusText: { enumerable: true },
  headers: { enumerable: true },
  clone: { enumerable: true }
});
var getSearch = (parsedURL) => {
  if (parsedURL.search) {
    return parsedURL.search;
  }
  const lastOffset = parsedURL.href.length - 1;
  const hash2 = parsedURL.hash || (parsedURL.href[lastOffset] === "#" ? "#" : "");
  return parsedURL.href[lastOffset - hash2.length] === "?" ? "?" : "";
};
var INTERNALS = Symbol("Request internals");
var isRequest = (object) => {
  return typeof object === "object" && typeof object[INTERNALS] === "object";
};
var Request = class extends Body {
  constructor(input, init2 = {}) {
    let parsedURL;
    if (isRequest(input)) {
      parsedURL = new URL(input.url);
    } else {
      parsedURL = new URL(input);
      input = {};
    }
    let method = init2.method || input.method || "GET";
    method = method.toUpperCase();
    if ((init2.body != null || isRequest(input)) && input.body !== null && (method === "GET" || method === "HEAD")) {
      throw new TypeError("Request with GET/HEAD method cannot have body");
    }
    const inputBody = init2.body ? init2.body : isRequest(input) && input.body !== null ? clone(input) : null;
    super(inputBody, {
      size: init2.size || input.size || 0
    });
    const headers = new Headers(init2.headers || input.headers || {});
    if (inputBody !== null && !headers.has("Content-Type")) {
      const contentType = extractContentType(inputBody, this);
      if (contentType) {
        headers.append("Content-Type", contentType);
      }
    }
    let signal = isRequest(input) ? input.signal : null;
    if ("signal" in init2) {
      signal = init2.signal;
    }
    if (signal !== null && !isAbortSignal(signal)) {
      throw new TypeError("Expected signal to be an instanceof AbortSignal");
    }
    this[INTERNALS] = {
      method,
      redirect: init2.redirect || input.redirect || "follow",
      headers,
      parsedURL,
      signal
    };
    this.follow = init2.follow === void 0 ? input.follow === void 0 ? 20 : input.follow : init2.follow;
    this.compress = init2.compress === void 0 ? input.compress === void 0 ? true : input.compress : init2.compress;
    this.counter = init2.counter || input.counter || 0;
    this.agent = init2.agent || input.agent;
    this.highWaterMark = init2.highWaterMark || input.highWaterMark || 16384;
    this.insecureHTTPParser = init2.insecureHTTPParser || input.insecureHTTPParser || false;
  }
  get method() {
    return this[INTERNALS].method;
  }
  get url() {
    return (0, import_url.format)(this[INTERNALS].parsedURL);
  }
  get headers() {
    return this[INTERNALS].headers;
  }
  get redirect() {
    return this[INTERNALS].redirect;
  }
  get signal() {
    return this[INTERNALS].signal;
  }
  clone() {
    return new Request(this);
  }
  get [Symbol.toStringTag]() {
    return "Request";
  }
};
Object.defineProperties(Request.prototype, {
  method: { enumerable: true },
  url: { enumerable: true },
  headers: { enumerable: true },
  redirect: { enumerable: true },
  clone: { enumerable: true },
  signal: { enumerable: true }
});
var getNodeRequestOptions = (request) => {
  const { parsedURL } = request[INTERNALS];
  const headers = new Headers(request[INTERNALS].headers);
  if (!headers.has("Accept")) {
    headers.set("Accept", "*/*");
  }
  let contentLengthValue = null;
  if (request.body === null && /^(post|put)$/i.test(request.method)) {
    contentLengthValue = "0";
  }
  if (request.body !== null) {
    const totalBytes = getTotalBytes(request);
    if (typeof totalBytes === "number" && !Number.isNaN(totalBytes)) {
      contentLengthValue = String(totalBytes);
    }
  }
  if (contentLengthValue) {
    headers.set("Content-Length", contentLengthValue);
  }
  if (!headers.has("User-Agent")) {
    headers.set("User-Agent", "node-fetch");
  }
  if (request.compress && !headers.has("Accept-Encoding")) {
    headers.set("Accept-Encoding", "gzip,deflate,br");
  }
  let { agent } = request;
  if (typeof agent === "function") {
    agent = agent(parsedURL);
  }
  if (!headers.has("Connection") && !agent) {
    headers.set("Connection", "close");
  }
  const search = getSearch(parsedURL);
  const requestOptions = {
    path: parsedURL.pathname + search,
    pathname: parsedURL.pathname,
    hostname: parsedURL.hostname,
    protocol: parsedURL.protocol,
    port: parsedURL.port,
    hash: parsedURL.hash,
    search: parsedURL.search,
    query: parsedURL.query,
    href: parsedURL.href,
    method: request.method,
    headers: headers[Symbol.for("nodejs.util.inspect.custom")](),
    insecureHTTPParser: request.insecureHTTPParser,
    agent
  };
  return requestOptions;
};
var AbortError = class extends FetchBaseError {
  constructor(message, type = "aborted") {
    super(message, type);
  }
};
var supportedSchemas = new Set(["data:", "http:", "https:"]);
async function fetch(url, options_) {
  return new Promise((resolve2, reject) => {
    const request = new Request(url, options_);
    const options2 = getNodeRequestOptions(request);
    if (!supportedSchemas.has(options2.protocol)) {
      throw new TypeError(`node-fetch cannot load ${url}. URL scheme "${options2.protocol.replace(/:$/, "")}" is not supported.`);
    }
    if (options2.protocol === "data:") {
      const data = dataUriToBuffer$1(request.url);
      const response2 = new Response(data, { headers: { "Content-Type": data.typeFull } });
      resolve2(response2);
      return;
    }
    const send = (options2.protocol === "https:" ? import_https.default : import_http.default).request;
    const { signal } = request;
    let response = null;
    const abort = () => {
      const error2 = new AbortError("The operation was aborted.");
      reject(error2);
      if (request.body && request.body instanceof import_stream.default.Readable) {
        request.body.destroy(error2);
      }
      if (!response || !response.body) {
        return;
      }
      response.body.emit("error", error2);
    };
    if (signal && signal.aborted) {
      abort();
      return;
    }
    const abortAndFinalize = () => {
      abort();
      finalize();
    };
    const request_ = send(options2);
    if (signal) {
      signal.addEventListener("abort", abortAndFinalize);
    }
    const finalize = () => {
      request_.abort();
      if (signal) {
        signal.removeEventListener("abort", abortAndFinalize);
      }
    };
    request_.on("error", (err) => {
      reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, "system", err));
      finalize();
    });
    request_.on("response", (response_) => {
      request_.setTimeout(0);
      const headers = fromRawHeaders(response_.rawHeaders);
      if (isRedirect(response_.statusCode)) {
        const location = headers.get("Location");
        const locationURL = location === null ? null : new URL(location, request.url);
        switch (request.redirect) {
          case "error":
            reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, "no-redirect"));
            finalize();
            return;
          case "manual":
            if (locationURL !== null) {
              try {
                headers.set("Location", locationURL);
              } catch (error2) {
                reject(error2);
              }
            }
            break;
          case "follow": {
            if (locationURL === null) {
              break;
            }
            if (request.counter >= request.follow) {
              reject(new FetchError(`maximum redirect reached at: ${request.url}`, "max-redirect"));
              finalize();
              return;
            }
            const requestOptions = {
              headers: new Headers(request.headers),
              follow: request.follow,
              counter: request.counter + 1,
              agent: request.agent,
              compress: request.compress,
              method: request.method,
              body: request.body,
              signal: request.signal,
              size: request.size
            };
            if (response_.statusCode !== 303 && request.body && options_.body instanceof import_stream.default.Readable) {
              reject(new FetchError("Cannot follow redirect with body being a readable stream", "unsupported-redirect"));
              finalize();
              return;
            }
            if (response_.statusCode === 303 || (response_.statusCode === 301 || response_.statusCode === 302) && request.method === "POST") {
              requestOptions.method = "GET";
              requestOptions.body = void 0;
              requestOptions.headers.delete("content-length");
            }
            resolve2(fetch(new Request(locationURL, requestOptions)));
            finalize();
            return;
          }
        }
      }
      response_.once("end", () => {
        if (signal) {
          signal.removeEventListener("abort", abortAndFinalize);
        }
      });
      let body = (0, import_stream.pipeline)(response_, new import_stream.PassThrough(), (error2) => {
        reject(error2);
      });
      if (process.version < "v12.10") {
        response_.on("aborted", abortAndFinalize);
      }
      const responseOptions = {
        url: request.url,
        status: response_.statusCode,
        statusText: response_.statusMessage,
        headers,
        size: request.size,
        counter: request.counter,
        highWaterMark: request.highWaterMark
      };
      const codings = headers.get("Content-Encoding");
      if (!request.compress || request.method === "HEAD" || codings === null || response_.statusCode === 204 || response_.statusCode === 304) {
        response = new Response(body, responseOptions);
        resolve2(response);
        return;
      }
      const zlibOptions = {
        flush: import_zlib.default.Z_SYNC_FLUSH,
        finishFlush: import_zlib.default.Z_SYNC_FLUSH
      };
      if (codings === "gzip" || codings === "x-gzip") {
        body = (0, import_stream.pipeline)(body, import_zlib.default.createGunzip(zlibOptions), (error2) => {
          reject(error2);
        });
        response = new Response(body, responseOptions);
        resolve2(response);
        return;
      }
      if (codings === "deflate" || codings === "x-deflate") {
        const raw = (0, import_stream.pipeline)(response_, new import_stream.PassThrough(), (error2) => {
          reject(error2);
        });
        raw.once("data", (chunk) => {
          if ((chunk[0] & 15) === 8) {
            body = (0, import_stream.pipeline)(body, import_zlib.default.createInflate(), (error2) => {
              reject(error2);
            });
          } else {
            body = (0, import_stream.pipeline)(body, import_zlib.default.createInflateRaw(), (error2) => {
              reject(error2);
            });
          }
          response = new Response(body, responseOptions);
          resolve2(response);
        });
        return;
      }
      if (codings === "br") {
        body = (0, import_stream.pipeline)(body, import_zlib.default.createBrotliDecompress(), (error2) => {
          reject(error2);
        });
        response = new Response(body, responseOptions);
        resolve2(response);
        return;
      }
      response = new Response(body, responseOptions);
      resolve2(response);
    });
    writeToStream(request_, request);
  });
}

// .svelte-kit/output/server/app.js
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _map;
function get_single_valued_header(headers, key) {
  const value = headers[key];
  if (Array.isArray(value)) {
    if (value.length === 0) {
      return void 0;
    }
    if (value.length > 1) {
      throw new Error(`Multiple headers provided for ${key}. Multiple may be provided only for set-cookie`);
    }
    return value[0];
  }
  return value;
}
function lowercase_keys(obj) {
  const clone2 = {};
  for (const key in obj) {
    clone2[key.toLowerCase()] = obj[key];
  }
  return clone2;
}
function error$1(body) {
  return {
    status: 500,
    body,
    headers: {}
  };
}
function is_string(s2) {
  return typeof s2 === "string" || s2 instanceof String;
}
function is_content_type_textual(content_type) {
  if (!content_type)
    return true;
  const [type] = content_type.split(";");
  return type === "text/plain" || type === "application/json" || type === "application/x-www-form-urlencoded" || type === "multipart/form-data";
}
async function render_endpoint(request, route, match) {
  const mod = await route.load();
  const handler2 = mod[request.method.toLowerCase().replace("delete", "del")];
  if (!handler2) {
    return;
  }
  const params = route.params(match);
  const response = await handler2({ ...request, params });
  const preface = `Invalid response from route ${request.path}`;
  if (!response) {
    return;
  }
  if (typeof response !== "object") {
    return error$1(`${preface}: expected an object, got ${typeof response}`);
  }
  let { status = 200, body, headers = {} } = response;
  headers = lowercase_keys(headers);
  const type = get_single_valued_header(headers, "content-type");
  const is_type_textual = is_content_type_textual(type);
  if (!is_type_textual && !(body instanceof Uint8Array || is_string(body))) {
    return error$1(`${preface}: body must be an instance of string or Uint8Array if content-type is not a supported textual content-type`);
  }
  let normalized_body;
  if ((typeof body === "object" || typeof body === "undefined") && !(body instanceof Uint8Array) && (!type || type.startsWith("application/json"))) {
    headers = { ...headers, "content-type": "application/json; charset=utf-8" };
    normalized_body = JSON.stringify(typeof body === "undefined" ? {} : body);
  } else {
    normalized_body = body;
  }
  return { status, body: normalized_body, headers };
}
var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var escaped$1 = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function devalue(value) {
  var counts = new Map();
  function walk(thing) {
    if (typeof thing === "function") {
      throw new Error("Cannot stringify a function");
    }
    if (counts.has(thing)) {
      counts.set(thing, counts.get(thing) + 1);
      return;
    }
    counts.set(thing, 1);
    if (!isPrimitive(thing)) {
      var type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach(walk);
          break;
        case "Set":
        case "Map":
          Array.from(thing).forEach(walk);
          break;
        default:
          var proto = Object.getPrototypeOf(thing);
          if (proto !== Object.prototype && proto !== null && Object.getOwnPropertyNames(proto).sort().join("\0") !== objectProtoOwnPropertyNames) {
            throw new Error("Cannot stringify arbitrary non-POJOs");
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new Error("Cannot stringify POJOs with symbolic keys");
          }
          Object.keys(thing).forEach(function(key) {
            return walk(thing[key]);
          });
      }
    }
  }
  walk(value);
  var names = new Map();
  Array.from(counts).filter(function(entry) {
    return entry[1] > 1;
  }).sort(function(a, b) {
    return b[1] - a[1];
  }).forEach(function(entry, i) {
    names.set(entry[0], getName(i));
  });
  function stringify(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (isPrimitive(thing)) {
      return stringifyPrimitive(thing);
    }
    var type = getType(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return "Object(" + stringify(thing.valueOf()) + ")";
      case "RegExp":
        return "new RegExp(" + stringifyString(thing.source) + ', "' + thing.flags + '")';
      case "Date":
        return "new Date(" + thing.getTime() + ")";
      case "Array":
        var members = thing.map(function(v, i) {
          return i in thing ? stringify(v) : "";
        });
        var tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return "[" + members.join(",") + tail + "]";
      case "Set":
      case "Map":
        return "new " + type + "([" + Array.from(thing).map(stringify).join(",") + "])";
      default:
        var obj = "{" + Object.keys(thing).map(function(key) {
          return safeKey(key) + ":" + stringify(thing[key]);
        }).join(",") + "}";
        var proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return Object.keys(thing).length > 0 ? "Object.assign(Object.create(null)," + obj + ")" : "Object.create(null)";
        }
        return obj;
    }
  }
  var str = stringify(value);
  if (names.size) {
    var params_1 = [];
    var statements_1 = [];
    var values_1 = [];
    names.forEach(function(name, thing) {
      params_1.push(name);
      if (isPrimitive(thing)) {
        values_1.push(stringifyPrimitive(thing));
        return;
      }
      var type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values_1.push("Object(" + stringify(thing.valueOf()) + ")");
          break;
        case "RegExp":
          values_1.push(thing.toString());
          break;
        case "Date":
          values_1.push("new Date(" + thing.getTime() + ")");
          break;
        case "Array":
          values_1.push("Array(" + thing.length + ")");
          thing.forEach(function(v, i) {
            statements_1.push(name + "[" + i + "]=" + stringify(v));
          });
          break;
        case "Set":
          values_1.push("new Set");
          statements_1.push(name + "." + Array.from(thing).map(function(v) {
            return "add(" + stringify(v) + ")";
          }).join("."));
          break;
        case "Map":
          values_1.push("new Map");
          statements_1.push(name + "." + Array.from(thing).map(function(_a) {
            var k = _a[0], v = _a[1];
            return "set(" + stringify(k) + ", " + stringify(v) + ")";
          }).join("."));
          break;
        default:
          values_1.push(Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}");
          Object.keys(thing).forEach(function(key) {
            statements_1.push("" + name + safeProp(key) + "=" + stringify(thing[key]));
          });
      }
    });
    statements_1.push("return " + str);
    return "(function(" + params_1.join(",") + "){" + statements_1.join(";") + "}(" + values_1.join(",") + "))";
  } else {
    return str;
  }
}
function getName(num) {
  var name = "";
  do {
    name = chars[num % chars.length] + name;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? name + "_" : name;
}
function isPrimitive(thing) {
  return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
  if (typeof thing === "string")
    return stringifyString(thing);
  if (thing === void 0)
    return "void 0";
  if (thing === 0 && 1 / thing < 0)
    return "-0";
  var str = String(thing);
  if (typeof thing === "number")
    return str.replace(/^(-)?0\./, "$1.");
  return str;
}
function getType(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c) {
  return escaped$1[c] || c;
}
function escapeUnsafeChars(str) {
  return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? key : escapeUnsafeChars(JSON.stringify(key));
}
function safeProp(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? "." + key : "[" + escapeUnsafeChars(JSON.stringify(key)) + "]";
}
function stringifyString(str) {
  var result = '"';
  for (var i = 0; i < str.length; i += 1) {
    var char = str.charAt(i);
    var code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped$1) {
      result += escaped$1[char];
    } else if (code >= 55296 && code <= 57343) {
      var next = str.charCodeAt(i + 1);
      if (code <= 56319 && (next >= 56320 && next <= 57343)) {
        result += char + str[++i];
      } else {
        result += "\\u" + code.toString(16).toUpperCase();
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}
function noop() {
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
Promise.resolve();
var subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe };
}
function hash(value) {
  let hash2 = 5381;
  let i = value.length;
  if (typeof value === "string") {
    while (i)
      hash2 = hash2 * 33 ^ value.charCodeAt(--i);
  } else {
    while (i)
      hash2 = hash2 * 33 ^ value[--i];
  }
  return (hash2 >>> 0).toString(36);
}
var s$1 = JSON.stringify;
async function render_response({
  branch,
  options: options2,
  $session,
  page_config,
  status,
  error: error2,
  page
}) {
  const css2 = new Set(options2.entry.css);
  const js = new Set(options2.entry.js);
  const styles = new Set();
  const serialized_data = [];
  let rendered;
  let is_private = false;
  let maxage;
  if (error2) {
    error2.stack = options2.get_stack(error2);
  }
  if (page_config.ssr) {
    branch.forEach(({ node, loaded, fetched, uses_credentials }) => {
      if (node.css)
        node.css.forEach((url) => css2.add(url));
      if (node.js)
        node.js.forEach((url) => js.add(url));
      if (node.styles)
        node.styles.forEach((content) => styles.add(content));
      if (fetched && page_config.hydrate)
        serialized_data.push(...fetched);
      if (uses_credentials)
        is_private = true;
      maxage = loaded.maxage;
    });
    const session = writable($session);
    const props = {
      stores: {
        page: writable(null),
        navigating: writable(null),
        session
      },
      page,
      components: branch.map(({ node }) => node.module.default)
    };
    for (let i = 0; i < branch.length; i += 1) {
      props[`props_${i}`] = await branch[i].loaded.props;
    }
    let session_tracking_active = false;
    const unsubscribe = session.subscribe(() => {
      if (session_tracking_active)
        is_private = true;
    });
    session_tracking_active = true;
    try {
      rendered = options2.root.render(props);
    } finally {
      unsubscribe();
    }
  } else {
    rendered = { head: "", html: "", css: { code: "", map: null } };
  }
  const include_js = page_config.router || page_config.hydrate;
  if (!include_js)
    js.clear();
  const links = options2.amp ? styles.size > 0 || rendered.css.code.length > 0 ? `<style amp-custom>${Array.from(styles).concat(rendered.css.code).join("\n")}</style>` : "" : [
    ...Array.from(js).map((dep) => `<link rel="modulepreload" href="${dep}">`),
    ...Array.from(css2).map((dep) => `<link rel="stylesheet" href="${dep}">`)
  ].join("\n		");
  let init2 = "";
  if (options2.amp) {
    init2 = `
		<style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style>
		<noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
		<script async src="https://cdn.ampproject.org/v0.js"><\/script>`;
  } else if (include_js) {
    init2 = `<script type="module">
			import { start } from ${s$1(options2.entry.file)};
			start({
				target: ${options2.target ? `document.querySelector(${s$1(options2.target)})` : "document.body"},
				paths: ${s$1(options2.paths)},
				session: ${try_serialize($session, (error3) => {
      throw new Error(`Failed to serialize session data: ${error3.message}`);
    })},
				host: ${page && page.host ? s$1(page.host) : "location.host"},
				route: ${!!page_config.router},
				spa: ${!page_config.ssr},
				trailing_slash: ${s$1(options2.trailing_slash)},
				hydrate: ${page_config.ssr && page_config.hydrate ? `{
					status: ${status},
					error: ${serialize_error(error2)},
					nodes: [
						${(branch || []).map(({ node }) => `import(${s$1(node.entry)})`).join(",\n						")}
					],
					page: {
						host: ${page && page.host ? s$1(page.host) : "location.host"}, // TODO this is redundant
						path: ${s$1(page && page.path)},
						query: new URLSearchParams(${page ? s$1(page.query.toString()) : ""}),
						params: ${page && s$1(page.params)}
					}
				}` : "null"}
			});
		<\/script>`;
  }
  if (options2.service_worker) {
    init2 += `<script>
			if ('serviceWorker' in navigator) {
				navigator.serviceWorker.register('${options2.service_worker}');
			}
		<\/script>`;
  }
  const head = [
    rendered.head,
    styles.size && !options2.amp ? `<style data-svelte>${Array.from(styles).join("\n")}</style>` : "",
    links,
    init2
  ].join("\n\n		");
  const body = options2.amp ? rendered.html : `${rendered.html}

			${serialized_data.map(({ url, body: body2, json }) => {
    let attributes = `type="application/json" data-type="svelte-data" data-url="${url}"`;
    if (body2)
      attributes += ` data-body="${hash(body2)}"`;
    return `<script ${attributes}>${json}<\/script>`;
  }).join("\n\n	")}
		`;
  const headers = {
    "content-type": "text/html"
  };
  if (maxage) {
    headers["cache-control"] = `${is_private ? "private" : "public"}, max-age=${maxage}`;
  }
  if (!options2.floc) {
    headers["permissions-policy"] = "interest-cohort=()";
  }
  return {
    status,
    headers,
    body: options2.template({ head, body })
  };
}
function try_serialize(data, fail) {
  try {
    return devalue(data);
  } catch (err) {
    if (fail)
      fail(err);
    return null;
  }
}
function serialize_error(error2) {
  if (!error2)
    return null;
  let serialized = try_serialize(error2);
  if (!serialized) {
    const { name, message, stack } = error2;
    serialized = try_serialize({ ...error2, name, message, stack });
  }
  if (!serialized) {
    serialized = "{}";
  }
  return serialized;
}
function normalize(loaded) {
  const has_error_status = loaded.status && loaded.status >= 400 && loaded.status <= 599 && !loaded.redirect;
  if (loaded.error || has_error_status) {
    const status = loaded.status;
    if (!loaded.error && has_error_status) {
      return {
        status: status || 500,
        error: new Error()
      };
    }
    const error2 = typeof loaded.error === "string" ? new Error(loaded.error) : loaded.error;
    if (!(error2 instanceof Error)) {
      return {
        status: 500,
        error: new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof error2}"`)
      };
    }
    if (!status || status < 400 || status > 599) {
      console.warn('"error" returned from load() without a valid status code \u2014 defaulting to 500');
      return { status: 500, error: error2 };
    }
    return { status, error: error2 };
  }
  if (loaded.redirect) {
    if (!loaded.status || Math.floor(loaded.status / 100) !== 3) {
      return {
        status: 500,
        error: new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')
      };
    }
    if (typeof loaded.redirect !== "string") {
      return {
        status: 500,
        error: new Error('"redirect" property returned from load() must be a string')
      };
    }
  }
  return loaded;
}
var s = JSON.stringify;
async function load_node({
  request,
  options: options2,
  state,
  route,
  page,
  node,
  $session,
  context,
  prerender_enabled,
  is_leaf,
  is_error,
  status,
  error: error2
}) {
  const { module: module2 } = node;
  let uses_credentials = false;
  const fetched = [];
  let loaded;
  const page_proxy = new Proxy(page, {
    get: (target, prop, receiver) => {
      if (prop === "query" && prerender_enabled) {
        throw new Error("Cannot access query on a page with prerendering enabled");
      }
      return Reflect.get(target, prop, receiver);
    }
  });
  if (module2.load) {
    const load_input = {
      page: page_proxy,
      get session() {
        uses_credentials = true;
        return $session;
      },
      fetch: async (resource, opts = {}) => {
        let url;
        if (typeof resource === "string") {
          url = resource;
        } else {
          url = resource.url;
          opts = {
            method: resource.method,
            headers: resource.headers,
            body: resource.body,
            mode: resource.mode,
            credentials: resource.credentials,
            cache: resource.cache,
            redirect: resource.redirect,
            referrer: resource.referrer,
            integrity: resource.integrity,
            ...opts
          };
        }
        const resolved = resolve(request.path, url.split("?")[0]);
        let response;
        const filename = resolved.replace(options2.paths.assets, "").slice(1);
        const filename_html = `${filename}/index.html`;
        const asset = options2.manifest.assets.find((d) => d.file === filename || d.file === filename_html);
        if (asset) {
          response = options2.read ? new Response(options2.read(asset.file), {
            headers: asset.type ? { "content-type": asset.type } : {}
          }) : await fetch(`http://${page.host}/${asset.file}`, opts);
        } else if (resolved.startsWith("/") && !resolved.startsWith("//")) {
          const relative = resolved;
          const headers = {
            ...opts.headers
          };
          if (opts.credentials !== "omit") {
            uses_credentials = true;
            headers.cookie = request.headers.cookie;
            if (!headers.authorization) {
              headers.authorization = request.headers.authorization;
            }
          }
          if (opts.body && typeof opts.body !== "string") {
            throw new Error("Request body must be a string");
          }
          const search = url.includes("?") ? url.slice(url.indexOf("?") + 1) : "";
          const rendered = await respond({
            host: request.host,
            method: opts.method || "GET",
            headers,
            path: relative,
            rawBody: opts.body == null ? null : new TextEncoder().encode(opts.body),
            query: new URLSearchParams(search)
          }, options2, {
            fetched: url,
            initiator: route
          });
          if (rendered) {
            if (state.prerender) {
              state.prerender.dependencies.set(relative, rendered);
            }
            response = new Response(rendered.body, {
              status: rendered.status,
              headers: rendered.headers
            });
          }
        } else {
          if (resolved.startsWith("//")) {
            throw new Error(`Cannot request protocol-relative URL (${url}) in server-side fetch`);
          }
          if (typeof request.host !== "undefined") {
            const { hostname: fetch_hostname } = new URL(url);
            const [server_hostname] = request.host.split(":");
            if (`.${fetch_hostname}`.endsWith(`.${server_hostname}`) && opts.credentials !== "omit") {
              uses_credentials = true;
              opts.headers = {
                ...opts.headers,
                cookie: request.headers.cookie
              };
            }
          }
          const external_request = new Request(url, opts);
          response = await options2.hooks.externalFetch.call(null, external_request);
        }
        if (response) {
          const proxy = new Proxy(response, {
            get(response2, key, receiver) {
              async function text() {
                const body = await response2.text();
                const headers = {};
                for (const [key2, value] of response2.headers) {
                  if (key2 !== "etag" && key2 !== "set-cookie")
                    headers[key2] = value;
                }
                if (!opts.body || typeof opts.body === "string") {
                  fetched.push({
                    url,
                    body: opts.body,
                    json: `{"status":${response2.status},"statusText":${s(response2.statusText)},"headers":${s(headers)},"body":${escape$1(body)}}`
                  });
                }
                return body;
              }
              if (key === "text") {
                return text;
              }
              if (key === "json") {
                return async () => {
                  return JSON.parse(await text());
                };
              }
              return Reflect.get(response2, key, response2);
            }
          });
          return proxy;
        }
        return response || new Response("Not found", {
          status: 404
        });
      },
      context: { ...context }
    };
    if (is_error) {
      load_input.status = status;
      load_input.error = error2;
    }
    loaded = await module2.load.call(null, load_input);
  } else {
    loaded = {};
  }
  if (!loaded && is_leaf && !is_error)
    return;
  if (!loaded) {
    throw new Error(`${node.entry} - load must return a value except for page fall through`);
  }
  return {
    node,
    loaded: normalize(loaded),
    context: loaded.context || context,
    fetched,
    uses_credentials
  };
}
var escaped$2 = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
function escape$1(str) {
  let result = '"';
  for (let i = 0; i < str.length; i += 1) {
    const char = str.charAt(i);
    const code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped$2) {
      result += escaped$2[char];
    } else if (code >= 55296 && code <= 57343) {
      const next = str.charCodeAt(i + 1);
      if (code <= 56319 && next >= 56320 && next <= 57343) {
        result += char + str[++i];
      } else {
        result += `\\u${code.toString(16).toUpperCase()}`;
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}
var absolute = /^([a-z]+:)?\/?\//;
function resolve(base2, path) {
  const base_match = absolute.exec(base2);
  const path_match = absolute.exec(path);
  if (!base_match) {
    throw new Error(`bad base path: "${base2}"`);
  }
  const baseparts = path_match ? [] : base2.slice(base_match[0].length).split("/");
  const pathparts = path_match ? path.slice(path_match[0].length).split("/") : path.split("/");
  baseparts.pop();
  for (let i = 0; i < pathparts.length; i += 1) {
    const part = pathparts[i];
    if (part === ".")
      continue;
    else if (part === "..")
      baseparts.pop();
    else
      baseparts.push(part);
  }
  const prefix = path_match && path_match[0] || base_match && base_match[0] || "";
  return `${prefix}${baseparts.join("/")}`;
}
function coalesce_to_error(err) {
  return err instanceof Error ? err : new Error(JSON.stringify(err));
}
async function respond_with_error({ request, options: options2, state, $session, status, error: error2 }) {
  const default_layout = await options2.load_component(options2.manifest.layout);
  const default_error = await options2.load_component(options2.manifest.error);
  const page = {
    host: request.host,
    path: request.path,
    query: request.query,
    params: {}
  };
  const loaded = await load_node({
    request,
    options: options2,
    state,
    route: null,
    page,
    node: default_layout,
    $session,
    context: {},
    prerender_enabled: is_prerender_enabled(options2, default_error, state),
    is_leaf: false,
    is_error: false
  });
  const branch = [
    loaded,
    await load_node({
      request,
      options: options2,
      state,
      route: null,
      page,
      node: default_error,
      $session,
      context: loaded ? loaded.context : {},
      prerender_enabled: is_prerender_enabled(options2, default_error, state),
      is_leaf: false,
      is_error: true,
      status,
      error: error2
    })
  ];
  try {
    return await render_response({
      options: options2,
      $session,
      page_config: {
        hydrate: options2.hydrate,
        router: options2.router,
        ssr: options2.ssr
      },
      status,
      error: error2,
      branch,
      page
    });
  } catch (err) {
    const error3 = coalesce_to_error(err);
    options2.handle_error(error3, request);
    return {
      status: 500,
      headers: {},
      body: error3.stack
    };
  }
}
function is_prerender_enabled(options2, node, state) {
  return options2.prerender && (!!node.module.prerender || !!state.prerender && state.prerender.all);
}
async function respond$1(opts) {
  const { request, options: options2, state, $session, route } = opts;
  let nodes;
  try {
    nodes = await Promise.all(route.a.map((id) => id ? options2.load_component(id) : void 0));
  } catch (err) {
    const error3 = coalesce_to_error(err);
    options2.handle_error(error3, request);
    return await respond_with_error({
      request,
      options: options2,
      state,
      $session,
      status: 500,
      error: error3
    });
  }
  const leaf = nodes[nodes.length - 1].module;
  let page_config = get_page_config(leaf, options2);
  if (!leaf.prerender && state.prerender && !state.prerender.all) {
    return {
      status: 204,
      headers: {},
      body: ""
    };
  }
  let branch = [];
  let status = 200;
  let error2;
  ssr:
    if (page_config.ssr) {
      let context = {};
      for (let i = 0; i < nodes.length; i += 1) {
        const node = nodes[i];
        let loaded;
        if (node) {
          try {
            loaded = await load_node({
              ...opts,
              node,
              context,
              prerender_enabled: is_prerender_enabled(options2, node, state),
              is_leaf: i === nodes.length - 1,
              is_error: false
            });
            if (!loaded)
              return;
            if (loaded.loaded.redirect) {
              return {
                status: loaded.loaded.status,
                headers: {
                  location: encodeURI(loaded.loaded.redirect)
                }
              };
            }
            if (loaded.loaded.error) {
              ({ status, error: error2 } = loaded.loaded);
            }
          } catch (err) {
            const e = coalesce_to_error(err);
            options2.handle_error(e, request);
            status = 500;
            error2 = e;
          }
          if (loaded && !error2) {
            branch.push(loaded);
          }
          if (error2) {
            while (i--) {
              if (route.b[i]) {
                const error_node = await options2.load_component(route.b[i]);
                let node_loaded;
                let j = i;
                while (!(node_loaded = branch[j])) {
                  j -= 1;
                }
                try {
                  const error_loaded = await load_node({
                    ...opts,
                    node: error_node,
                    context: node_loaded.context,
                    prerender_enabled: is_prerender_enabled(options2, error_node, state),
                    is_leaf: false,
                    is_error: true,
                    status,
                    error: error2
                  });
                  if (error_loaded.loaded.error) {
                    continue;
                  }
                  page_config = get_page_config(error_node.module, options2);
                  branch = branch.slice(0, j + 1).concat(error_loaded);
                  break ssr;
                } catch (err) {
                  const e = coalesce_to_error(err);
                  options2.handle_error(e, request);
                  continue;
                }
              }
            }
            return await respond_with_error({
              request,
              options: options2,
              state,
              $session,
              status,
              error: error2
            });
          }
        }
        if (loaded && loaded.loaded.context) {
          context = {
            ...context,
            ...loaded.loaded.context
          };
        }
      }
    }
  try {
    return await render_response({
      ...opts,
      page_config,
      status,
      error: error2,
      branch: branch.filter(Boolean)
    });
  } catch (err) {
    const error3 = coalesce_to_error(err);
    options2.handle_error(error3, request);
    return await respond_with_error({
      ...opts,
      status: 500,
      error: error3
    });
  }
}
function get_page_config(leaf, options2) {
  return {
    ssr: "ssr" in leaf ? !!leaf.ssr : options2.ssr,
    router: "router" in leaf ? !!leaf.router : options2.router,
    hydrate: "hydrate" in leaf ? !!leaf.hydrate : options2.hydrate
  };
}
async function render_page(request, route, match, options2, state) {
  if (state.initiator === route) {
    return {
      status: 404,
      headers: {},
      body: `Not found: ${request.path}`
    };
  }
  const params = route.params(match);
  const page = {
    host: request.host,
    path: request.path,
    query: request.query,
    params
  };
  const $session = await options2.hooks.getSession(request);
  const response = await respond$1({
    request,
    options: options2,
    state,
    $session,
    route,
    page
  });
  if (response) {
    return response;
  }
  if (state.fetched) {
    return {
      status: 500,
      headers: {},
      body: `Bad request in load function: failed to fetch ${state.fetched}`
    };
  }
}
function read_only_form_data() {
  const map = new Map();
  return {
    append(key, value) {
      if (map.has(key)) {
        (map.get(key) || []).push(value);
      } else {
        map.set(key, [value]);
      }
    },
    data: new ReadOnlyFormData(map)
  };
}
var ReadOnlyFormData = class {
  constructor(map) {
    __privateAdd(this, _map, void 0);
    __privateSet(this, _map, map);
  }
  get(key) {
    const value = __privateGet(this, _map).get(key);
    return value && value[0];
  }
  getAll(key) {
    return __privateGet(this, _map).get(key);
  }
  has(key) {
    return __privateGet(this, _map).has(key);
  }
  *[Symbol.iterator]() {
    for (const [key, value] of __privateGet(this, _map)) {
      for (let i = 0; i < value.length; i += 1) {
        yield [key, value[i]];
      }
    }
  }
  *entries() {
    for (const [key, value] of __privateGet(this, _map)) {
      for (let i = 0; i < value.length; i += 1) {
        yield [key, value[i]];
      }
    }
  }
  *keys() {
    for (const [key] of __privateGet(this, _map))
      yield key;
  }
  *values() {
    for (const [, value] of __privateGet(this, _map)) {
      for (let i = 0; i < value.length; i += 1) {
        yield value[i];
      }
    }
  }
};
_map = new WeakMap();
function parse_body(raw, headers) {
  if (!raw)
    return raw;
  const content_type = headers["content-type"];
  const [type, ...directives] = content_type ? content_type.split(/;\s*/) : [];
  const text = () => new TextDecoder(headers["content-encoding"] || "utf-8").decode(raw);
  switch (type) {
    case "text/plain":
      return text();
    case "application/json":
      return JSON.parse(text());
    case "application/x-www-form-urlencoded":
      return get_urlencoded(text());
    case "multipart/form-data": {
      const boundary = directives.find((directive) => directive.startsWith("boundary="));
      if (!boundary)
        throw new Error("Missing boundary");
      return get_multipart(text(), boundary.slice("boundary=".length));
    }
    default:
      return raw;
  }
}
function get_urlencoded(text) {
  const { data, append } = read_only_form_data();
  text.replace(/\+/g, " ").split("&").forEach((str) => {
    const [key, value] = str.split("=");
    append(decodeURIComponent(key), decodeURIComponent(value));
  });
  return data;
}
function get_multipart(text, boundary) {
  const parts = text.split(`--${boundary}`);
  if (parts[0] !== "" || parts[parts.length - 1].trim() !== "--") {
    throw new Error("Malformed form data");
  }
  const { data, append } = read_only_form_data();
  parts.slice(1, -1).forEach((part) => {
    const match = /\s*([\s\S]+?)\r\n\r\n([\s\S]*)\s*/.exec(part);
    if (!match) {
      throw new Error("Malformed form data");
    }
    const raw_headers = match[1];
    const body = match[2].trim();
    let key;
    const headers = {};
    raw_headers.split("\r\n").forEach((str) => {
      const [raw_header, ...raw_directives] = str.split("; ");
      let [name, value] = raw_header.split(": ");
      name = name.toLowerCase();
      headers[name] = value;
      const directives = {};
      raw_directives.forEach((raw_directive) => {
        const [name2, value2] = raw_directive.split("=");
        directives[name2] = JSON.parse(value2);
      });
      if (name === "content-disposition") {
        if (value !== "form-data")
          throw new Error("Malformed form data");
        if (directives.filename) {
          throw new Error("File upload is not yet implemented");
        }
        if (directives.name) {
          key = directives.name;
        }
      }
    });
    if (!key)
      throw new Error("Malformed form data");
    append(key, body);
  });
  return data;
}
async function respond(incoming, options2, state = {}) {
  if (incoming.path !== "/" && options2.trailing_slash !== "ignore") {
    const has_trailing_slash = incoming.path.endsWith("/");
    if (has_trailing_slash && options2.trailing_slash === "never" || !has_trailing_slash && options2.trailing_slash === "always" && !(incoming.path.split("/").pop() || "").includes(".")) {
      const path = has_trailing_slash ? incoming.path.slice(0, -1) : incoming.path + "/";
      const q = incoming.query.toString();
      return {
        status: 301,
        headers: {
          location: options2.paths.base + path + (q ? `?${q}` : "")
        }
      };
    }
  }
  const headers = lowercase_keys(incoming.headers);
  const request = {
    ...incoming,
    headers,
    body: parse_body(incoming.rawBody, headers),
    params: {},
    locals: {}
  };
  try {
    return await options2.hooks.handle({
      request,
      resolve: async (request2) => {
        if (state.prerender && state.prerender.fallback) {
          return await render_response({
            options: options2,
            $session: await options2.hooks.getSession(request2),
            page_config: { ssr: false, router: true, hydrate: true },
            status: 200,
            branch: []
          });
        }
        for (const route of options2.manifest.routes) {
          const match = route.pattern.exec(request2.path);
          if (!match)
            continue;
          const response = route.type === "endpoint" ? await render_endpoint(request2, route, match) : await render_page(request2, route, match, options2, state);
          if (response) {
            if (response.status === 200) {
              const cache_control = get_single_valued_header(response.headers, "cache-control");
              if (!cache_control || !/(no-store|immutable)/.test(cache_control)) {
                const etag = `"${hash(response.body || "")}"`;
                if (request2.headers["if-none-match"] === etag) {
                  return {
                    status: 304,
                    headers: {},
                    body: ""
                  };
                }
                response.headers["etag"] = etag;
              }
            }
            return response;
          }
        }
        const $session = await options2.hooks.getSession(request2);
        return await respond_with_error({
          request: request2,
          options: options2,
          state,
          $session,
          status: 404,
          error: new Error(`Not found: ${request2.path}`)
        });
      }
    });
  } catch (err) {
    const e = coalesce_to_error(err);
    options2.handle_error(e, request);
    return {
      status: 500,
      headers: {},
      body: options2.dev ? e.stack : e.message
    };
  }
}
function run(fn) {
  return fn();
}
function blank_object() {
  return Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
var current_component;
function set_current_component(component) {
  current_component = component;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function setContext(key, context) {
  get_current_component().$$.context.set(key, context);
}
Promise.resolve();
var escaped = {
  '"': "&quot;",
  "'": "&#39;",
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;"
};
function escape(html) {
  return String(html).replace(/["'&<>]/g, (match) => escaped[match]);
}
function each(items, fn) {
  let str = "";
  for (let i = 0; i < items.length; i += 1) {
    str += fn(items[i], i);
  }
  return str;
}
var missing_component = {
  $$render: () => ""
};
function validate_component(component, name) {
  if (!component || !component.$$render) {
    if (name === "svelte:component")
      name += " this={...}";
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
  }
  return component;
}
var on_destroy;
function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(parent_component ? parent_component.$$.context : context || []),
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({ $$ });
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }
  return {
    render: (props = {}, { $$slots = {}, context = new Map() } = {}) => {
      on_destroy = [];
      const result = { title: "", head: "", css: new Set() };
      const html = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map((css2) => css2.code).join("\n"),
          map: null
        },
        head: result.title + result.head
      };
    },
    $$render
  };
}
function add_attribute(name, value, boolean) {
  if (value == null || boolean && !value)
    return "";
  return ` ${name}${value === true ? "" : `=${typeof value === "string" ? JSON.stringify(escape(value)) : `"${value}"`}`}`;
}
function afterUpdate() {
}
var css = {
  code: "#svelte-announcer.svelte-1pdgbjn{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;left:0;overflow:hidden;position:absolute;top:0;white-space:nowrap;width:1px}",
  map: `{"version":3,"file":"root.svelte","sources":["root.svelte"],"sourcesContent":["<!-- This file is generated by @sveltejs/kit \u2014 do not edit it! -->\\n<script>\\n\\timport { setContext, afterUpdate, onMount } from 'svelte';\\n\\n\\t// stores\\n\\texport let stores;\\n\\texport let page;\\n\\n\\texport let components;\\n\\texport let props_0 = null;\\n\\texport let props_1 = null;\\n\\texport let props_2 = null;\\n\\n\\tsetContext('__svelte__', stores);\\n\\n\\t$: stores.page.set(page);\\n\\tafterUpdate(stores.page.notify);\\n\\n\\tlet mounted = false;\\n\\tlet navigated = false;\\n\\tlet title = null;\\n\\n\\tonMount(() => {\\n\\t\\tconst unsubscribe = stores.page.subscribe(() => {\\n\\t\\t\\tif (mounted) {\\n\\t\\t\\t\\tnavigated = true;\\n\\t\\t\\t\\ttitle = document.title || 'untitled page';\\n\\t\\t\\t}\\n\\t\\t});\\n\\n\\t\\tmounted = true;\\n\\t\\treturn unsubscribe;\\n\\t});\\n<\/script>\\n\\n<svelte:component this={components[0]} {...(props_0 || {})}>\\n\\t{#if components[1]}\\n\\t\\t<svelte:component this={components[1]} {...(props_1 || {})}>\\n\\t\\t\\t{#if components[2]}\\n\\t\\t\\t\\t<svelte:component this={components[2]} {...(props_2 || {})}/>\\n\\t\\t\\t{/if}\\n\\t\\t</svelte:component>\\n\\t{/if}\\n</svelte:component>\\n\\n{#if mounted}\\n\\t<div id=\\"svelte-announcer\\" aria-live=\\"assertive\\" aria-atomic=\\"true\\">\\n\\t\\t{#if navigated}\\n\\t\\t\\t{title}\\n\\t\\t{/if}\\n\\t</div>\\n{/if}\\n\\n<style>#svelte-announcer{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;left:0;overflow:hidden;position:absolute;top:0;white-space:nowrap;width:1px}</style>"],"names":[],"mappings":"AAqDO,gCAAiB,CAAC,KAAK,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,kBAAkB,MAAM,GAAG,CAAC,CAAC,UAAU,MAAM,GAAG,CAAC,CAAC,OAAO,GAAG,CAAC,KAAK,CAAC,CAAC,SAAS,MAAM,CAAC,SAAS,QAAQ,CAAC,IAAI,CAAC,CAAC,YAAY,MAAM,CAAC,MAAM,GAAG,CAAC"}`
};
var Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page } = $$props;
  let { components } = $$props;
  let { props_0 = null } = $$props;
  let { props_1 = null } = $$props;
  let { props_2 = null } = $$props;
  setContext("__svelte__", stores);
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.props_0 === void 0 && $$bindings.props_0 && props_0 !== void 0)
    $$bindings.props_0(props_0);
  if ($$props.props_1 === void 0 && $$bindings.props_1 && props_1 !== void 0)
    $$bindings.props_1(props_1);
  if ($$props.props_2 === void 0 && $$bindings.props_2 && props_2 !== void 0)
    $$bindings.props_2(props_2);
  $$result.css.add(css);
  {
    stores.page.set(page);
  }
  return `


${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, Object.assign(props_0 || {}), {}, {
    default: () => `${components[1] ? `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, Object.assign(props_1 || {}), {}, {
      default: () => `${components[2] ? `${validate_component(components[2] || missing_component, "svelte:component").$$render($$result, Object.assign(props_2 || {}), {}, {})}` : ``}`
    })}` : ``}`
  })}

${``}`;
});
var base = "";
var assets = "";
function set_paths(paths) {
  base = paths.base;
  assets = paths.assets || base;
}
function set_prerendering(value) {
}
var user_hooks = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module"
});
var template = ({ head, body }) => `<!DOCTYPE html>\r
<html lang="en">\r
  <head>\r
    <meta charset="utf-8" />\r
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">\r
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">\r
    <link rel="icon" href="/favicon.ico" />\r
    <meta name="viewport" content="width=device-width, initial-scale=1" />\r
    <meta name="robots" content="follow, index" />\r
    <title>Theo's Portfolio</title>\r
    <meta\r
      content="Welcome to Theo's Portfolio"\r
      name="description"\r
    />\r
    <meta\r
      property="og:title"\r
      content="Theo's Portfolio"\r
    />\r
    <meta property="og:image" content="/thumbnail.webp" />\r
    <meta name="twitter:card" content="summary_large_image" />\r
    <meta name="twitter:site" content="@whatsorceryweb" />\r
    <meta name="twitter:author" content="@theonikomao" />\r
    <meta\r
      name="twitter:title"\r
      content="Theo's Portfolio"\r
    />\r
    <meta\r
      name="twitter:description"\r
      content="Welcome to Theo's Portfolio"\r
    />\r
    <meta name="twitter:image" content="/thumbnail.webp" />\r
    \r
    ` + head + '\r\n    <script src="https://kit.fontawesome.com/27161b8578.js" crossorigin="anonymous"><\/script>\r\n  </head>\r\n  <body class="bg-warmGray-100 min-h-screen min-w-screen mx-auto text-center text-gray-800">\r\n    <div id="svelte">' + body + "</div>\r\n  </body>\r\n</html>\r\n";
var options = null;
var default_settings = { paths: { "base": "", "assets": "" } };
function init(settings = default_settings) {
  set_paths(settings.paths);
  set_prerendering(settings.prerendering || false);
  const hooks = get_hooks(user_hooks);
  options = {
    amp: false,
    dev: false,
    entry: {
      file: assets + "/_app/start-09f967eb.js",
      css: [assets + "/_app/assets/start-464e9d0a.css"],
      js: [assets + "/_app/start-09f967eb.js", assets + "/_app/chunks/vendor-0730d8ab.js"]
    },
    fetched: void 0,
    floc: false,
    get_component_path: (id) => assets + "/_app/" + entry_lookup[id],
    get_stack: (error2) => String(error2),
    handle_error: (error2, request) => {
      hooks.handleError({ error: error2, request });
      error2.stack = options.get_stack(error2);
    },
    hooks,
    hydrate: true,
    initiator: void 0,
    load_component,
    manifest,
    paths: settings.paths,
    prerender: true,
    read: settings.read,
    root: Root,
    service_worker: null,
    router: true,
    ssr: true,
    target: "#svelte",
    template,
    trailing_slash: "never"
  };
}
var empty = () => ({});
var manifest = {
  assets: [{ "file": "android-chrome-192x192.png", "size": 9361, "type": "image/png" }, { "file": "android-chrome-512x512.png", "size": 45105, "type": "image/png" }, { "file": "apple-touch-icon.png", "size": 8360, "type": "image/png" }, { "file": "assets/man-with-camera.webp", "size": 20846, "type": "image/webp" }, { "file": "favicon-16x16.png", "size": 611, "type": "image/png" }, { "file": "favicon-32x32.png", "size": 1281, "type": "image/png" }, { "file": "favicon.ico", "size": 15406, "type": "image/vnd.microsoft.icon" }, { "file": "manifest.json", "size": 401, "type": "application/json" }, { "file": "photos/osakajo/osakajo-1.webp", "size": 71778, "type": "image/webp" }, { "file": "photos/osakajo/osakajo-2.webp", "size": 44378, "type": "image/webp" }, { "file": "photos/osakajo/osakajo-3.webp", "size": 37238, "type": "image/webp" }, { "file": "photos/osakajo/osakajo-4.webp", "size": 48400, "type": "image/webp" }, { "file": "photos/osakajo/osakajo-5.webp", "size": 80106, "type": "image/webp" }, { "file": "photos/portfolio/a-boat-in-the-sunset.webp", "size": 36816, "type": "image/webp" }, { "file": "photos/portfolio/prudential-event-photography.webp", "size": 12132, "type": "image/webp" }, { "file": "photos/portfolio/watch-product-shot.webp", "size": 15254, "type": "image/webp" }, { "file": "robots.txt", "size": 70, "type": "text/plain" }, { "file": "thumbnail.webp", "size": 70862, "type": "image/webp" }, { "file": "whatsorcery-logo.png", "size": 2407, "type": "image/png" }],
  layout: "src/routes/__layout.svelte",
  error: ".svelte-kit/build/components/error.svelte",
  routes: [
    {
      type: "page",
      pattern: /^\/$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/contact\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/contact.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/photos\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/photos/index.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/photos\/osakajo\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/photos/osakajo/index.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/about\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/about/index.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/blog\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/blog/index.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/blog\/Writing-User-Story-Flows\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/blog/Writing-User-Story-Flows.svx"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/work\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/work/index.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    }
  ]
};
var get_hooks = (hooks) => ({
  getSession: hooks.getSession || (() => ({})),
  handle: hooks.handle || (({ request, resolve: resolve2 }) => resolve2(request)),
  handleError: hooks.handleError || (({ error: error2 }) => console.error(error2.stack)),
  externalFetch: hooks.externalFetch || fetch
});
var module_lookup = {
  "src/routes/__layout.svelte": () => Promise.resolve().then(function() {
    return __layout;
  }),
  ".svelte-kit/build/components/error.svelte": () => Promise.resolve().then(function() {
    return error;
  }),
  "src/routes/index.svelte": () => Promise.resolve().then(function() {
    return index$5;
  }),
  "src/routes/contact.svelte": () => Promise.resolve().then(function() {
    return contact;
  }),
  "src/routes/photos/index.svelte": () => Promise.resolve().then(function() {
    return index$4;
  }),
  "src/routes/photos/osakajo/index.svelte": () => Promise.resolve().then(function() {
    return index$3;
  }),
  "src/routes/about/index.svelte": () => Promise.resolve().then(function() {
    return index$2;
  }),
  "src/routes/blog/index.svelte": () => Promise.resolve().then(function() {
    return index$1;
  }),
  "src/routes/blog/Writing-User-Story-Flows.svx": () => Promise.resolve().then(function() {
    return WritingUserStoryFlows;
  }),
  "src/routes/work/index.svelte": () => Promise.resolve().then(function() {
    return index;
  })
};
var metadata_lookup = { "src/routes/__layout.svelte": { "entry": "pages/__layout.svelte-35b9bb58.js", "css": ["assets/pages/__layout.svelte-53c90d21.css"], "js": ["pages/__layout.svelte-35b9bb58.js", "chunks/vendor-0730d8ab.js"], "styles": [] }, ".svelte-kit/build/components/error.svelte": { "entry": "error.svelte-5f025e87.js", "css": [], "js": ["error.svelte-5f025e87.js", "chunks/vendor-0730d8ab.js"], "styles": [] }, "src/routes/index.svelte": { "entry": "pages/index.svelte-68bc817a.js", "css": [], "js": ["pages/index.svelte-68bc817a.js", "chunks/vendor-0730d8ab.js"], "styles": [] }, "src/routes/contact.svelte": { "entry": "pages/contact.svelte-040f36a3.js", "css": [], "js": ["pages/contact.svelte-040f36a3.js", "chunks/vendor-0730d8ab.js"], "styles": [] }, "src/routes/photos/index.svelte": { "entry": "pages/photos/index.svelte-6e2ed3eb.js", "css": [], "js": ["pages/photos/index.svelte-6e2ed3eb.js", "chunks/vendor-0730d8ab.js", "chunks/Header-60294262.js"], "styles": [] }, "src/routes/photos/osakajo/index.svelte": { "entry": "pages/photos/osakajo/index.svelte-85a35095.js", "css": [], "js": ["pages/photos/osakajo/index.svelte-85a35095.js", "chunks/vendor-0730d8ab.js"], "styles": [] }, "src/routes/about/index.svelte": { "entry": "pages/about/index.svelte-46fff45d.js", "css": [], "js": ["pages/about/index.svelte-46fff45d.js", "chunks/vendor-0730d8ab.js"], "styles": [] }, "src/routes/blog/index.svelte": { "entry": "pages/blog/index.svelte-f28262a0.js", "css": [], "js": ["pages/blog/index.svelte-f28262a0.js", "chunks/vendor-0730d8ab.js", "chunks/Header-60294262.js"], "styles": [] }, "src/routes/blog/Writing-User-Story-Flows.svx": { "entry": "pages/blog/Writing-User-Story-Flows.svx-d301aa87.js", "css": [], "js": ["pages/blog/Writing-User-Story-Flows.svx-d301aa87.js", "chunks/vendor-0730d8ab.js"], "styles": [] }, "src/routes/work/index.svelte": { "entry": "pages/work/index.svelte-07865dab.js", "css": [], "js": ["pages/work/index.svelte-07865dab.js", "chunks/vendor-0730d8ab.js", "chunks/Header-60294262.js"], "styles": [] } };
async function load_component(file) {
  const { entry, css: css2, js, styles } = metadata_lookup[file];
  return {
    module: await module_lookup[file](),
    entry: assets + "/_app/" + entry,
    css: css2.map((dep) => assets + "/_app/" + dep),
    js: js.map((dep) => assets + "/_app/" + dep),
    styles
  };
}
function render(request, {
  prerender
} = {}) {
  const host = request.headers["host"];
  return respond({ ...request, host }, options, { prerender });
}
var Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="${"fixed w-screen z-50 bg-coolGray-50 shadow-md"}"><div class="${"flex justify-between max-w-screen-lg items-center mx-auto p-2"}"><a href="${"/"}" class="${"font-extralight text-center tracking-widest leading-4 text-[0.9rem] uppercase inline-block"}">Theo <br><span class="${"text-[0.975rem]"}">Niko</span></a>
<div class="${"flex justify-evenly text-[0.85rem] items-center"}"><a href="${"/"}" class="${"mx-[0.2rem] sm:mx-8"}">Home
            </a> 
      <a href="${"/work"}" class="${"mx-[0.2rem] sm:mx-8"}">Work
            </a> 
      <a href="${"/about"}" class="${"mx-[0.2rem] sm:mx-8"}">About
            </a> 
      <a href="${"/contact"}" class="${"mx-[0.2rem] sm:mx-8"}">Contact
            </a></div> 
  <div class="${"inline-flex w-1/5 space-x-2 items-center sm:space-x-6 sm:scale-150 justify-end"}"><a href="${"https://twitter.com/theonikomao"}"><i class="${"fab fa-twitter text-gray-600 hover:text-gray-400 inline-block"}"></i></a>
      <a href="${"https://linkedin.com/in/theonikolai"}"><i class="${"fab fa-linkedin text-gray-600 hover:text-gray-400 inline-block"}"></i></a>
    <a href="${"https://github.com/theonikolai/theo-sorcery"}"><i class="${"fab fa-github text-gray-600 hover:text-gray-400 inline-block"}"></i></a></div></div></nav>`;
});
var Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `

<footer class="${"container bottom-0 relative left-0 right-0 w-max mx-auto py-4"}"><a href="${"/"}" class="${"group"}"><img src="${"whatsorcery-logo.png"}" height="${"32"}" width="${"32"}" title="${"mao"}" class="${"inline mr-2 shadow group-hover:shadow-lg"}" alt="${"what sorcery logo"}">
    

    <p class="${"inline sm:text-xl sm:tracking-widest text-base tracking-wider text-center group-hover:underline"}">Created by Theo Nikolai Idris
    </p></a></footer>`;
});
var _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}

<main class="${"pt-20"}">${slots.default ? slots.default({}) : ``}</main>

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
var __layout = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _layout
});
function load({ error: error2, status }) {
  return { props: { error: error2, status } };
}
var Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { status } = $$props;
  let { error: error2 } = $$props;
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.error === void 0 && $$bindings.error && error2 !== void 0)
    $$bindings.error(error2);
  return `<h1>${escape(status)}</h1>

<pre>${escape(error2.message)}</pre>



${error2.frame ? `<pre>${escape(error2.frame)}</pre>` : ``}
${error2.stack ? `<pre>${escape(error2.stack)}</pre>` : ``}`;
});
var error = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Error$1,
  load
});
var Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header class="${"container flex flex-col items-center px-4 py-4 mx-auto text-center h-4/5"}"><h1 class="${"relative z-10 pb-6 text-4xl font-black leading-tight text-center text-gray-800 sm:text-5xl md:text-6xl tracking-snug sm:leading-snug md:leading-tight"}">We don&#39;t just make content
        <br>
        <span class="${"relative inline-flex"}"><span aria-hidden="${"false"}" class="${"absolute inset-0 inline transform scale-75 md:scale-95 -translate-x-1 bg-red-300 -rotate-2"}"></span>

          <span class="${"relative"}">We design experiences</span></span></h1>
      <div class="${"flex flex-wrap justify-center"}"><a href="${"/contact"}"><button class="${"px-8 py-3 m-1 text-xl scale-90 font-bold text-white border-2 bg-gray-800 hover:bg-black filter hover:drop-shadow-xl transition duration-300 hover:-translate-y-1"}">Get in touch</button></a>
        <a href="${"/about"}"><button class="${"px-8 py-3 m-1 text-xl scale-90 text-gray-600 border-2 border-gray-600 hover:drop-shadow-xl filter hover:-text-black transition duration-300 hover:border-black bg-coolGray-50 hover:text-gray-800 hover:-translate-y-1"}">Learn more</button></a></div></header>

<a href="${"/work"}"><section class="${"container inline-flex items-center justify-center transition duration-300 group hover:scale-95"}"><p class="${"absolute text-2xl hidden md:text-4xl font-extrabold text-gray-900 group-hover:block"}">Check out our latest work<br>by <span class="${"cursor-pointer hover:text-indigo-700 hover:scale-105 underline text-indigo-900"}">clicking here</span></p>
    <img src="${"/photos/osakajo/osakajo-5.webp"}" alt="${""}" class="${"w-full sm:h-[400] sm:w-auto mx-auto transition duration-300 rounded-lg shadow-md group-hover:opacity-30"}"></section></a>
  
<section class="${"block"}"><div class="${"max-w-screen-xl mx-auto"}"><div class="${"px-6"}"></div></div>
  
  <div class="${"p-6 mx-auto"}"><h2 class="${"md:text-5xl text-3xl text-center text-gray-900 text-extrabold"}">So what do I do?
    </h2>
    <p class="${"mt-2 text-[1.3rem] text-center"}">Well, check them out yourself:</p>
    <ol class="${"flex flex-col justify-center items-center text-xl lg:flex-row lg:mx-4"}"><li class="${"flex flex-col p-8 mt-8 bg-coolGray-50 rounded transition duration-300 shadow lg:w-1/5 lg:mx-4 hover:scale-105 hover:shadow-xl"}"><picture class="${"mb-4 text-center"}"><source srcset="${"https://vexilo-crm.s3.amazonaws.com/assets/Diagnostico@2x.webp 2x, https://vexilo-crm.s3.amazonaws.com/assets/Diagnostico.webp"}" type="${"image/webp"}">
          <source srcset="${"https://vexilo-crm.s3.amazonaws.com/assets/Diagnostico@2x.png 2x, https://vexilo-crm.s3.amazonaws.com/assets/Diagnostico.png"}">
          <img alt="${"Content Consultancy"}" src="${"https://vexilo-crm.s3.amazonaws.com/assets/Diagnostico.png"}"></picture>
        <p class="${"text-xl"}">01</p>
        <h3 class="${"my-2.5 font-semibold text-2xl"}">Content Creation</h3>
        <p class="${""}">From videos to blogs, we know exactly what matters to your audience.</p></li>
      <li class="${"flex transition duration-300 flex-col p-8 mt-8 bg-coolGray-50 rounded shadow lg:w-1/5 lg:mx-4 hover:scale-105 hover:shadow-xl"}"><picture class="${"mb-4 text-center"}"><source srcset="${"https://vexilo-crm.s3.amazonaws.com/assets/Diseno@2x.webp 2x, https://vexilo-crm.s3.amazonaws.com/assets/Diseno.webp"}" type="${"image/webp"}">
          <source srcset="${"https://vexilo-crm.s3.amazonaws.com/assets/Diseno@2x.png 2x, https://vexilo-crm.s3.amazonaws.com/assets/Diseno.png"}">
          <img alt="${"Web Design"}" src="${"https://vexilo-crm.s3.amazonaws.com/assets/Diseno.png"}"></picture>
        <p class="${"text-xl"}">02</p>
        <h3 class="${"text-2xl my-2 font-semibold"}">Web Development</h3>
        <p class="${"mb-0"}">Using only the best, each products is designed to delight your audience.
        </p></li>
      <li class="${"flex transition duration-300 flex-col p-8 mt-8 bg-coolGray-50 justify-center items-center rounded shadow lg:w-1/5 lg:mx-4 hover:scale-105 hover:shadow-xl"}"><picture class="${"mb-4 text-center"}"><source srcset="${"https://vexilo-crm.s3.amazonaws.com/assets/Desarrollo@2x.webp 2x, https://vexilo-crm.s3.amazonaws.com/assets/Desarrollo.webp"}" type="${"image/webp"}">
          <source srcset="${"https://vexilo-crm.s3.amazonaws.com/assets/Desarrollo@2x.png 2x, https://vexilo-crm.s3.amazonaws.com/assets/Desarrollo.png"}">
          <img alt="${"Strategy Development"}" src="${"https://vexilo-crm.s3.amazonaws.com/assets/Desarrollo.png"}"></picture>
        <p class="${"text-xl"}">03</p>
        <h4 class="${"text-2xl font-semibold my-2"}">Strategy Development</h4>
        <p class="${"mb-0"}">Whether it&#39;s content, tech, or inefficient workflows, we&#39;ll help you solve it
        </p></li></ol></div>
  <div class="${"relative mx-4 my-2"}"><h3 class="${"text-[1.75rem] ml-2 font-extrabold leading-9 tracking-tight text-left text-gray-900 lg:text-center sm:text-4xl sm:leading-10"}">Want the latest tips on content strategy?
    </h3>
    <p class="${"max-w-3xl ml-2 sm:mx-auto mt-2 text-[1.15rem] sm:text-[1.3rem] leading-7 text-left text-gray-400 sm:text-center"}">Subscribe to our newsletter below!
    </p>
    <form novalidate name="${"subscription"}" method="${"POST"}" data-netlify="${"true"}" class="${"container flex items-center justify-center mx-auto my-4 w-7xl"}"><div class="${"flex flex-row"}"><input type="${"text"}" placeholder="${"example@email.com"}" class="${"md:w-56 p-3 rounded sm:w-2/3"}">
        <button type="${"button"}" class="${"p-3 font-semibold rounded-r-lg sm:w-1/3 transition duration-300 shadow border-gray-200 border-2 hover:bg-gray-300 hover:shadow-md "}">Subscribe</button></div></form></div></section>`;
});
var index$5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Routes
});
var Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Get in touch</title>`, ""}`, ""}
<div class="${"flex flex-col items-center justify-center w-screen"}"><h1 class="${"mb-4 text-3xl font-semibold text-gray-600 md:text-4xl"}">Like what you see?<br><span class="${"text-xl md:text-4xl"}">Book a free consultation today!</span></h1>
<section class="${"p-6"}"><form novalidate name="${"contact"}" method="${"POST"}" data-netlify="${"true"}" class="${"container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md filter drop-shadow shadow-lg bg-coolGray-50 ng-untouched ng-pristine ng-valid"}"><h2 class="${"w-full text-3xl font-bold leading-tight"}">Contact us</h2>
		<div><label for="${"name"}" class="${"block mb-1 ml-1"}">Name</label>
			<input id="${"name"}" type="${"text"}" placeholder="${"Your name"}" required class="${"block w-full border-0 shadow-md p-2 rounded focus:outline-none focus:ring-0 focus:ring-opacity-25 focus:ring-violet-400 focus:drop-shadow-xl focus:-translate-y-0.5 transition duration-200 hover:drop-shadow dark:bg-coolGray-800"}"></div>
		<div><label for="${"email"}" class="${"block mb-1 ml-1"}">Email</label>
			<input id="${"email"}" type="${"email"}" placeholder="${"Your email"}" required class="${"block w-full border-0 shadow-md p-2 rounded focus:outline-none focus:ring-0 focus:ring-opacity-25 focus:ring-violet-400 focus:drop-shadow-xl focus:-translate-y-0.5 transition duration-200 hover:drop-shadow dark:bg-coolGray-800"}"></div>
		<div><label for="${"message"}" class="${"block mb-1 ml-1"}">Message</label>
			<textarea id="${"message"}" type="${"text"}" placeholder="${"Message..."}" class="${"block md:w-96 w-full border-0 shadow-md p-2 rounded autoexpand focus:outline-none focus:ring-0 focus:ring-opacity-25 focus:ring-violet-400 focus:drop-shadow-xl focus:-translate-y-0.5 transition duration-200 hover:drop-shadow dark:bg-coolGray-800"}"></textarea></div>
		<div><button type="${"submit"}" class="${"w-full px-4 py-2 font-bold rounded shadow-md focus:outline-none focus:ring hover:ring-0 focus:ring-opacity-50 dark:bg-violet-400 focus:ring-violet-400 focus:drop-shadow-xl focus:-translate-y-0.5 transition duration-200 hover:drop-shadow dark:text-coolGray-900"}">Send</button></div></form></section></div>`;
});
var contact = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Contact
});
var Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header class="${"bg-white pt-5 pb-3 max-w-xl text-3xl mx-auto drop-shadow"}"><h1 class="${"font-bold mb-2"}">${slots.title ? slots.title({}) : `<span>Oh no</span>`}</h1>
    <p class="${"tracking-wider text-lg mx-4"}">${slots.subtitle ? slots.subtitle({}) : `<span>Nothing to see here</span>`}</p></header>`;
});
var Photos = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pics = [
    {
      title: "Imperial Garden",
      location: "Osakajo",
      caption: "A glimpse of Osakajo's beauty in spring",
      src: "/photos/osakajo/osakajo-5.webp",
      href: "/photos/osakajo"
    }
  ];
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {
    subtitle: () => `<span slot="${"subtitle"}">There&#39;s a story in each one</span>`,
    title: () => `<span slot="${"title"}">Photo Gallery</span>`
  })}
<section class="${"mt-4 max-w-xl mx-auto bg-white"}">${each(pics, ({ title, location, caption, src: src2, href }) => `<a svelte:prefetch${add_attribute("href", href, 0)} class="${"shadow bg-white hover:shadow-lg"}"><article class="${"shadow-lg flex justify-start flex-col p-4"}"><img${add_attribute("src", src2, 0)}${add_attribute("alt", caption, 0)} width="${"600"}" height="${"400"}" class="${"dropshadow transition hover:scale-105 duration-300 hover:drop-shadow-2xl"}">
        <h2 class="${"font-bold text-left mt-2 mx-4 text-2xl"}">${escape(title)}</h2>
        <p class="${"mx-4 text-left text-gray-400"}">${escape(location)}</p>
        <p class="${"text-left mx-4"}">${escape(caption)}</p></article>
    </a>`)}</section>`;
});
var index$4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Photos
});
var ImgHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header class="${"mx-auto flex max-w-xlg flex-col p-2 justify-start items-start"}"><h1 class="${"my-2 text-left text-4xl md:text-5xl font-bold"}">${slots.title ? slots.title({}) : `<span>Such a pretty place</span>`}</h1>
  <div><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"}" clip-rule="${"evenodd"}"></path></svg>
    <p class="${"text-left px-1 text-xl"}">${slots.location ? slots.location({}) : `<span>But where are we?</span>`}</p></div></header>`;
});
var Osakajo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let osaka = [
    {
      src: "/photos/osakajo/osakajo-2.webp",
      alt: "a path leading up to one of the old buildings in osakajo"
    },
    {
      src: "/photos/osakajo/osakajo-3.webp",
      alt: "it feels peaceful staring at these old shrines in osakajo"
    },
    {
      src: "/photos/osakajo/osakajo-4.webp",
      alt: "cherry blossoms blooming, we see an apartment in the background from inside osaka castle"
    }
  ];
  return `${$$result.head += `${$$result.title = `<title>Imperial Garden: Osakajo</title>`, ""}`, ""}
<article class="${"max-w-xl mx-auto"}">${validate_component(ImgHeader, "ImgHeader").$$render($$result, {}, {}, {
    location: () => `<span slot="${"location"}">Osakajo</span>`,
    title: () => `<span slot="${"title"}">Imperial Garden </span>`
  })}
<img src="${"/photos/osakajo/osakajo-1.webp"}" alt="${"a pristine view of one of the few lakes from inside Osaka Castle, we see two traditional Japanese buildings in the background"}" class="${"max-w-screen px-2"}">
<div class="${"carousel p-2 space-x-2 carousel-center"}">${each(osaka, ({ src: src2, alt }) => `<div class="${"carousel-item"}"><img${add_attribute("src", src2, 0)}${add_attribute("alt", alt, 0)} class="${"rounded w-full"}">
  </div>`)}</div>
<img src="${"/photos/osakajo/osakajo-5.webp"}" alt="${"the gardens of osaka castle, a single sakura trees blossoming in the background"}" class="${"max-w-screen px-2"}">
<p class="${"py-2 px-4 md:px-6 text-lg"}">I was fortunate enough to visit Osakajo (Osaka Castle) during my visit to
  Japan.
</p>
<p class="${"text-lg px-4 md:px-6 py-2"}">The landscape was beautiful, I just had to snap these shots during our visit.
</p></article>`;
});
var index$3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Osakajo
});
var ObjCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<article class="${"border-2 hover:drop-shadow-lg hover:-translate-y-1 bg-gray-50 hover:bg-coolGray-50 group hover:shadow-xl hover:border-emerald-700 transition duration-300 h-28 w-80 px-2 pt-3 pb-2 my-2 border-coolGray-400 shadow-md flex"}">${slots.default ? slots.default({}) : ``}
      <div class="${"flex flex-col justify-center items-start px-0.5 text-left"}"><h3 class="${"text-2xl transition duration-300 filter group-hover:drop-shadow-sm group-hover:font-extrabold text-coolGray-600 group-hover:text-coolGray-900 font-semibold"}">${slots.product ? slots.product({}) : `<span>HubSpot</span>`}</h3>
      <p class="${"text-warmGray-400 transition duration-300 group-hover:drop-shadow-sm group-hover:text-blueGray-600"}">${slots.text ? slots.text({}) : `<span>Inbound CRM Software</span>`}</p></div></article>`;
});
var About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>About Theo</title>`, ""}`, ""}

<div class="${"relative max-w-screen-xl p-4 px-4 mx-auto bg-warmGray-100 dark:bg-gray-800 sm:px-6 lg:px-8 py-26 lg:mt-20"}"><div class="${"relative"}">
    <div class="${"lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center"}"><div class="${"ml-auto lg:col-start-2 lg:max-w-2xl"}"><p class="${"text-base font-normal leading-8 tracking-widest text-gray-400 uppercase"}">Content creator since 2010
        </p>
        <h1 class="${"mt-2 text-2xl font-extrabold leading-8 text-gray-900 sm:text-3xl sm:leading-9"}">Blending creativity with strategy to deliver truly memorable
          experiences
        </h1>
        <p class="${"mt-4 text-xl leading-6 text-gray-500"}">After working several years as a filmmaker, I suffered a massive burnout only to rediscover a new passion for startups, tech, and product development - eventually becoming a consultant.<br><br>
          Now, alongside <a href="${"https://hannahazlan.com"}">Hannah Azlan</a>, we&#39;re developing several products and services to help rebuild the startup landscape.
        </p>
        <br>
        <h2 class="${"text-xl"}">Here&#39;s what can I do</h2>
        
        <ul class="${"gap-6 mt-8 md:grid md:grid-cols-2"}"><li class="${"mt-6 lg:mt-0"}"><div class="${"flex"}"><span class="${"flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent"}"><svg class="${"w-4 h-4"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"}" clip-rule="${"evenodd"}"></path></svg></span>
              <span class="${"ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200"}">Video Production
              </span></div></li>
          <li class="${"mt-6 lg:mt-0"}"><div class="${"flex"}"><span class="${"flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent"}"><svg class="${"w-4 h-4"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"}" clip-rule="${"evenodd"}"></path></svg></span>
              <span class="${"ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200"}">Photography
              </span></div></li>
          <li class="${"mt-6 lg:mt-0"}"><div class="${"flex"}"><span class="${"flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent"}"><svg class="${"w-4 h-4"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"}" clip-rule="${"evenodd"}"></path></svg></span>
              <span class="${"ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200"}">Web Development
              </span></div></li>
          <li class="${"mt-6 lg:mt-0"}"><div class="${"flex"}"><span class="${"flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent"}"><svg class="${"w-4 h-4"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"}" clip-rule="${"evenodd"}"></path></svg></span>
              <span class="${"ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200"}">Content Strategy
              </span></div></li>
          <li class="${"mt-6 lg:mt-0"}"><div class="${"flex"}"><span class="${"flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent"}"><svg class="${"w-4 h-4"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"}" clip-rule="${"evenodd"}"></path></svg></span>
              <span class="${"ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200"}">No-Code Development
              </span></div></li>
          <li class="${"mt-6 lg:mt-0"}"><div class="${"flex"}"><span class="${"flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent"}"><svg class="${"w-4 h-4"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"}" clip-rule="${"evenodd"}"></path></svg></span>
              <span class="${"ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200"}">Inbound Strategy
              </span></div></li></ul></div>
      
      <div class="${"relative mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1"}"><div class="${"relative space-y-4"}"><h2 class="${"text-2xl sm:hidden font-semibold"}">Samples of my photography</h2>
          <div class="${"flex items-end justify-center space-x-4 lg:justify-start"}"><img class="${"w-32 rounded-lg shadow-lg md:w-56"}" width="${"200"}" src="${"photos/portfolio/a-boat-in-the-sunset.webp"}" alt="${"A boat in fhe sunset"}">
            <img class="${"w-40 rounded-lg shadow-lg md:w-64"}" width="${"260"}" src="${"/photos/osakajo/osakajo-1.webp"}" alt="${"One of the few lakes in Osaka Castle"}"></div>
          <div class="${"flex items-start justify-center ml-12 space-x-4 lg:justify-start"}"><img class="${"w-28 rounded-lg shadow-lg md:w-40"}" width="${"170"}" src="${"/photos/portfolio/prudential-event-photography.webp"}" alt="${"Prudential Event Photography"}">
            <img class="${"w-32 rounded-lg shadow-lg md:w-56"}" width="${"200"}" src="${"/photos/portfolio/watch-product-shot.webp"}" alt="${"A watch wrapped around a fluffy white pillow"}"></div></div></div></div></div></div>

<section class="${"dark:bg-coolGray-800 dark:text-coolGray-100 mx-8"}"><div class="${"container p-6 mx-auto space-y-6 text-center lg:p-8 lg:space-y-8"}"><h2 class="${"text-3xl text-gray-800 sm:text-4xl font-bold"}">Technologies I&#39;m familiar with</h2>
    <div class="${"flex flex-wrap justify-center lg:justify-between"}">${validate_component(ObjCard, "ObjCard").$$render($$result, {}, {}, {
    text: () => `<span slot="${"text"}">The lingua franca of the web</span>`,
    product: () => `<span slot="${"product"}">HTML 5</span>`,
    default: () => `<svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 32 32"}" aria-label="${"Plain HTML"}" class="${"filter drop-shadow group-hover:text-[#E34F26] group-hover:drop-shadow-lg w-12 h-12 ml-2 mr-4 my-5 fill-current"}"><title>Plain HTML</title><path d="${"M2 0h28l-2.547 28.75-11.484 3.25-11.417-3.25zM11.375 13l-0.307-3.625 13.411 0.005 0.307-3.495-17.573-0.005 0.932 10.682h12.167l-0.432 4.568-3.88 1.068-3.938-1.078-0.255-2.813h-3.479l0.443 5.563 7.229 1.932 7.172-1.927 0.99-10.875z"}"></path></svg>`
  })}
      ${validate_component(ObjCard, "ObjCard").$$render($$result, {}, {}, {
    text: () => `<span slot="${"text"}">How we make the web prettier</span>`,
    product: () => `<span slot="${"product"}">CSS 3</span>`,
    default: () => `<i class="${"fab fa-css3-alt fa-3x scale-95 filter group-hover:text-[#1572B6] group-hover:drop-shadow-lg drop-shadow w-12 h-12 ml-2 mr-4 my-5 fill-current"}" title="${"css3"}" alt="${"css3"}"></i>`
  })}
      ${validate_component(ObjCard, "ObjCard").$$render($$result, {}, {}, {
    text: () => `<span slot="${"text"}">Like CSS, but in your HTML</span>`,
    product: () => `<span slot="${"product"}">Tailwind CSS</span>`,
    default: () => `<svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 54 32"}" aria-label="${"Tailwind CSS"}" class="${"filter group-hover:text-[#38B2AC] group-hover:drop-shadow-lg drop-shadow w-12 h-12 ml-2 mr-4 my-5 fill-current"}"><title>Tailwind CSS</title><g clip-path="${"url(#prefix__clip0)"}"><path fill="${"#222"}" fill-rule="${"evenodd"}" d="${"M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"}" clip-rule="${"evenodd"}"></path></g><defs><clipPath id="${"prefix__clip0"}"><path fill="${"#fff"}" d="${"M0 0h54v32.4H0z"}"></path></clipPath></defs></svg>`
  })}
      ${validate_component(ObjCard, "ObjCard").$$render($$result, {}, {}, {
    text: () => `<span slot="${"text"}">Time Travel for Developers</span>`,
    product: () => `<span slot="${"product"}">Git</span>`,
    default: () => `<svg width="${"32"}" height="${"32"}" xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" aria-label="${"Git"}" class="${"filter group-hover:text-[#F05032] group-hover:drop-shadow-lg drop-shadow w-14 h-14 ml-2 mr-4 my-5 fill-current"}"><title>Git</title><defs><path id="${"a"}" d="${"M.033.062h49.906V50H.033z"}"></path></defs><g fill="${"none"}" fill-rule="${"evenodd"}"><mask id="${"b"}" fill="${"#eee"}"><use xlink:href="${"#a"}"></use></mask><path d="${"M48.997 22.807L27.193 1.004a3.216 3.216 0 00-4.548 0l-4.528 4.528 5.744 5.744a3.817 3.817 0 014.836 4.869l5.536 5.535A3.826 3.826 0 0138.187 28a3.827 3.827 0 01-6.246-4.163l-5.163-5.162V32.26a3.828 3.828 0 11-4.4 6.137 3.828 3.828 0 011.254-6.249v-13.71a3.826 3.826 0 01-2.077-5.018l-5.662-5.664L.942 22.706a3.218 3.218 0 000 4.55l21.805 21.803a3.217 3.217 0 004.548 0l21.702-21.702a3.218 3.218 0 000-4.55"}" fill="${"#222"}" mask="${"url(#b)"}"></path></g></svg>`
  })}
      ${validate_component(ObjCard, "ObjCard").$$render($$result, {}, {}, {
    text: () => `<span slot="${"text"}">Vercel wanted an easier React</span>`,
    product: () => `<span slot="${"product"}">Next JS</span>`,
    default: () => `<svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 32 32"}" aria-label="${"Next.js"}" class="${"filter group-hover:text-[#000] group-hover:drop-shadow-lg drop-shadow w-12 h-12 ml-2 mr-4 my-5 fill-current"}"><title>Next.js</title><path d="${"M23.749 30.005c-0.119 0.063-0.109 0.083 0.005 0.025 0.037-0.015 0.068-0.036 0.095-0.061 0-0.021 0-0.021-0.1 0.036zM23.989 29.875c-0.057 0.047-0.057 0.047 0.011 0.016 0.036-0.021 0.068-0.041 0.068-0.047 0-0.027-0.016-0.021-0.079 0.031zM24.145 29.781c-0.057 0.047-0.057 0.047 0.011 0.016 0.037-0.021 0.068-0.043 0.068-0.048 0-0.025-0.016-0.020-0.079 0.032zM24.303 29.688c-0.057 0.047-0.057 0.047 0.009 0.015 0.037-0.020 0.068-0.041 0.068-0.047 0-0.025-0.016-0.020-0.077 0.032zM24.516 29.547c-0.109 0.073-0.147 0.12-0.047 0.068 0.067-0.041 0.181-0.131 0.161-0.131-0.043 0.016-0.079 0.043-0.115 0.063zM14.953 0.011c-0.073 0.005-0.292 0.025-0.484 0.041-4.548 0.412-8.803 2.86-11.5 6.631-1.491 2.067-2.459 4.468-2.824 6.989-0.129 0.88-0.145 1.14-0.145 2.333 0 1.192 0.016 1.448 0.145 2.328 0.871 6.011 5.147 11.057 10.943 12.927 1.043 0.333 2.136 0.563 3.381 0.704 0.484 0.052 2.577 0.052 3.061 0 2.152-0.24 3.969-0.771 5.767-1.688 0.276-0.14 0.328-0.177 0.291-0.208-0.88-1.161-1.744-2.323-2.609-3.495l-2.557-3.453-3.203-4.745c-1.068-1.588-2.14-3.172-3.229-4.744-0.011 0-0.025 2.109-0.031 4.681-0.011 4.505-0.011 4.688-0.068 4.792-0.057 0.125-0.151 0.229-0.276 0.287-0.099 0.047-0.188 0.057-0.661 0.057h-0.541l-0.141-0.088c-0.088-0.057-0.161-0.136-0.208-0.229l-0.068-0.141 0.005-6.271 0.011-6.271 0.099-0.125c0.063-0.077 0.141-0.14 0.229-0.187 0.131-0.063 0.183-0.073 0.724-0.073 0.635 0 0.74 0.025 0.907 0.208 1.296 1.932 2.588 3.869 3.859 5.812 2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839 0.125-0.083c1.219-0.813 2.328-1.781 3.285-2.885 2.016-2.308 3.324-5.147 3.767-8.177 0.129-0.88 0.145-1.141 0.145-2.333 0-1.193-0.016-1.448-0.145-2.328-0.871-6.011-5.147-11.057-10.943-12.928-1.084-0.343-2.199-0.577-3.328-0.697-0.303-0.031-2.371-0.068-2.631-0.041zM21.5 9.688c0.151 0.072 0.265 0.208 0.317 0.364 0.027 0.084 0.032 1.823 0.027 5.74l-0.011 5.624-0.989-1.52-0.995-1.521v-4.083c0-2.647 0.011-4.131 0.025-4.204 0.047-0.167 0.161-0.307 0.313-0.395 0.124-0.063 0.172-0.068 0.667-0.068 0.463 0 0.541 0.005 0.645 0.063z"}"></path></svg>`
  })}
      ${validate_component(ObjCard, "ObjCard").$$render($$result, {}, {}, {
    text: () => `<span slot="${"text"}">Facebook wanted an easier dev experience</span>`,
    product: () => `<span slot="${"product"}">ReactJS</span>`,
    default: () => `<svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 32 32"}" aria-label="${"React"}" class="${"filter group-hover:text-[#61DAFB] group-hover:drop-shadow-lg drop-shadow w-12 h-12 ml-2 mr-4 my-5 fill-current"}"><title>React</title><path d="${"M16 13.146c-1.573 0-2.854 1.281-2.854 2.854s1.281 2.854 2.854 2.854c1.573 0 2.854-1.281 2.854-2.854s-1.281-2.854-2.854-2.854zM8.010 21.672l-0.63-0.156c-4.688-1.188-7.38-3.198-7.38-5.521s2.693-4.333 7.38-5.521l0.63-0.156 0.177 0.625c0.474 1.635 1.083 3.229 1.818 4.771l0.135 0.281-0.135 0.286c-0.734 1.536-1.344 3.13-1.818 4.771zM7.089 11.932c-3.563 1-5.75 2.536-5.75 4.063s2.188 3.057 5.75 4.063c0.438-1.391 0.964-2.745 1.578-4.063-0.615-1.318-1.141-2.672-1.578-4.063zM23.99 21.672l-0.177-0.625c-0.474-1.635-1.083-3.229-1.818-4.766l-0.135-0.286 0.135-0.286c0.734-1.536 1.344-3.13 1.818-4.771l0.177-0.62 0.63 0.156c4.688 1.188 7.38 3.198 7.38 5.521s-2.693 4.333-7.38 5.521zM23.333 15.995c0.641 1.385 1.172 2.745 1.578 4.063 3.568-1.005 5.75-2.536 5.75-4.063s-2.188-3.057-5.75-4.063c-0.438 1.385-0.964 2.745-1.578 4.063zM7.078 11.927l-0.177-0.625c-1.318-4.646-0.917-7.979 1.099-9.141 1.979-1.141 5.151 0.208 8.479 3.625l0.453 0.464-0.453 0.464c-1.182 1.229-2.26 2.552-3.229 3.958l-0.182 0.255-0.313 0.026c-1.703 0.135-3.391 0.406-5.047 0.813zM9.609 3.089c-0.359 0-0.677 0.073-0.943 0.229-1.323 0.766-1.557 3.422-0.646 7.005 1.422-0.318 2.859-0.542 4.313-0.672 0.833-1.188 1.75-2.323 2.734-3.391-2.078-2.026-4.047-3.172-5.458-3.172zM22.396 30.234c-0.005 0-0.005 0 0 0-1.901 0-4.344-1.427-6.875-4.031l-0.453-0.464 0.453-0.464c1.182-1.229 2.26-2.552 3.229-3.958l0.177-0.255 0.313-0.031c1.703-0.13 3.391-0.401 5.052-0.813l0.63-0.156 0.177 0.625c1.318 4.646 0.917 7.974-1.099 9.135-0.49 0.281-1.042 0.422-1.604 0.411zM16.932 25.729c2.078 2.026 4.047 3.172 5.458 3.172h0.005c0.354 0 0.672-0.078 0.938-0.229 1.323-0.766 1.563-3.422 0.646-7.005-1.422 0.318-2.865 0.542-4.313 0.667-0.833 1.193-1.75 2.323-2.734 3.396zM24.922 11.927l-0.63-0.161c-1.661-0.406-3.349-0.677-5.052-0.813l-0.313-0.026-0.177-0.255c-0.969-1.406-2.047-2.729-3.229-3.958l-0.453-0.464 0.453-0.464c3.328-3.417 6.5-4.766 8.479-3.625 2.016 1.161 2.417 4.495 1.099 9.141zM19.667 9.651c1.521 0.141 2.969 0.365 4.313 0.672 0.917-3.583 0.677-6.24-0.646-7.005-1.318-0.76-3.797 0.406-6.401 2.943 0.984 1.073 1.896 2.203 2.734 3.391zM9.609 30.234c-0.563 0.010-1.12-0.13-1.609-0.411-2.016-1.161-2.417-4.49-1.099-9.135l0.177-0.625 0.63 0.156c1.542 0.391 3.24 0.661 5.047 0.813l0.313 0.031 0.177 0.255c0.969 1.406 2.047 2.729 3.229 3.958l0.453 0.464-0.453 0.464c-2.526 2.604-4.969 4.031-6.865 4.031zM8.021 21.667c-0.917 3.583-0.677 6.24 0.646 7.005 1.318 0.75 3.792-0.406 6.401-2.943-0.984-1.073-1.901-2.203-2.734-3.396-1.453-0.125-2.891-0.349-4.313-0.667zM16 22.505c-1.099 0-2.224-0.047-3.354-0.141l-0.313-0.026-0.182-0.26c-0.635-0.917-1.24-1.859-1.797-2.828-0.563-0.969-1.078-1.958-1.557-2.969l-0.135-0.286 0.135-0.286c0.479-1.010 0.995-2 1.557-2.969 0.552-0.953 1.156-1.906 1.797-2.828l0.182-0.26 0.313-0.026c2.234-0.188 4.479-0.188 6.708 0l0.313 0.026 0.182 0.26c1.276 1.833 2.401 3.776 3.354 5.797l0.135 0.286-0.135 0.286c-0.953 2.021-2.073 3.964-3.354 5.797l-0.182 0.26-0.313 0.026c-1.125 0.094-2.255 0.141-3.354 0.141zM13.073 21.057c1.969 0.151 3.885 0.151 5.859 0 1.099-1.609 2.078-3.302 2.927-5.063-0.844-1.76-1.823-3.453-2.932-5.063-1.948-0.151-3.906-0.151-5.854 0-1.109 1.609-2.089 3.302-2.932 5.063 0.849 1.76 1.828 3.453 2.932 5.063z"}"></path></svg>`
  })}
      ${validate_component(ObjCard, "ObjCard").$$render($$result, {}, {}, {
    text: () => `<span slot="${"text"}">Like Vue, but without a Virtual DOM</span>`,
    product: () => `<span slot="${"product"}">Svelte</span>`,
    default: () => `<svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 32 32"}" aria-label="${"Svelte"}" class="${"filter group-hover:text-[#FF3E00] group-hover:drop-shadow-lg drop-shadow w-12 h-12 ml-2 mr-4 my-5 fill-current"}"><title>Svelte</title><path d="${"M27.573 4.229c-2.927-4.25-8.656-5.479-13.068-2.802l-7.464 4.745c-2.042 1.281-3.443 3.365-3.854 5.734-0.365 1.969-0.047 4.005 0.891 5.776-0.641 0.964-1.073 2.052-1.266 3.198-0.427 2.406 0.13 4.885 1.547 6.88 2.932 4.24 8.646 5.474 13.068 2.828l7.469-4.75c2.031-1.281 3.427-3.365 3.839-5.734 0.359-1.964 0.042-3.995-0.896-5.755 1.984-3.115 1.88-7.12-0.266-10.12zM13.76 28.172c-2.401 0.625-4.938-0.318-6.349-2.359-0.865-1.198-1.182-2.677-0.932-4.146l0.146-0.708 0.135-0.438 0.401 0.266c0.88 0.667 1.865 1.146 2.917 1.469l0.271 0.094-0.031 0.266c-0.026 0.37 0.083 0.786 0.297 1.104 0.438 0.63 1.198 0.932 1.932 0.734 0.161-0.052 0.318-0.104 0.453-0.188l7.438-4.745c0.375-0.24 0.615-0.599 0.708-1.026 0.083-0.443-0.026-0.896-0.266-1.255-0.443-0.615-1.198-0.891-1.932-0.708-0.161 0.057-0.333 0.12-0.469 0.203l-2.813 1.786c-2.661 1.583-6.099 0.839-7.865-1.708-0.859-1.198-1.198-2.693-0.938-4.146 0.26-1.438 1.12-2.698 2.365-3.469l7.422-4.745c0.469-0.292 0.974-0.505 1.521-0.667 2.401-0.625 4.932 0.318 6.349 2.349 1 1.406 1.281 3.203 0.76 4.849l-0.135 0.443-0.385-0.266c-0.891-0.651-1.88-1.146-2.932-1.469l-0.266-0.078 0.026-0.266c0.026-0.391-0.083-0.802-0.297-1.12-0.438-0.63-1.198-0.896-1.932-0.708-0.161 0.052-0.318 0.104-0.453 0.188l-7.453 4.786c-0.375 0.25-0.615 0.599-0.693 1.036-0.078 0.427 0.026 0.896 0.266 1.24 0.427 0.63 1.203 0.896 1.922 0.708 0.172-0.052 0.333-0.104 0.464-0.188l2.844-1.813c0.464-0.307 0.984-0.531 1.516-0.677 2.417-0.63 4.938 0.318 6.349 2.359 0.865 1.198 1.198 2.677 0.958 4.13-0.25 1.438-1.099 2.698-2.333 3.469l-7.438 4.734c-0.484 0.292-1.005 0.521-1.547 0.677z"}"></path></svg>`
  })}
      ${validate_component(ObjCard, "ObjCard").$$render($$result, {}, {}, {
    text: () => `<span slot="${"text"}">Like React, but with more HTML</span>`,
    product: () => `<span slot="${"product"}">Vue</span>`,
    default: () => `<svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 32 32"}" aria-label="${"Vue.js"}" class="${"filter group-hover:text-[#4FC08D] group-hover:drop-shadow-lg drop-shadow w-12 h-12 ml-2 mr-4 my-5 fill-current"}"><title>Vue.js</title><path d="${"M24.306 4.019h-4.806l-3.5 5.537-3-5.537h-11l14 23.981 14-23.981zM5.481 6.019h3.363l7.156 12.387 7.15-12.387h3.363l-10.512 18.012z"}"></path></svg>`
  })}</div></div></section>
<section class="${"dark:bg-coolGray-800 dark:text-coolGray-100 mx-8"}"><div class="${"container p-6 mx-auto space-y-6 text-center lg:p-8 lg:space-y-8"}"><h2 class="${"text-3xl sm:text-4xl text-gray-800 font-bold"}">Web Tools of choice</h2>
    <div class="${"flex flex-wrap justify-center lg:justify-between"}">${validate_component(ObjCard, "ObjCard").$$render($$result, {}, {}, {
    text: () => `<span slot="${"text"}">How all that Coding Magic works</span>`,
    product: () => `<span slot="${"product"}">VS Code</span>`,
    default: () => `<svg class="${"filter group-hover:text-[#007ACC] group-hover:drop-shadow-lg drop-shadow w-12 h-12 ml-2 mr-4 my-5 fill-current"}" role="${"img"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><title>Visual Studio Code</title><path d="${"M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"}"></path></svg>`
  })}
      ${validate_component(ObjCard, "ObjCard").$$render($$result, {}, {}, {
    text: () => `<span slot="${"text"}">It deploys websites</span>`,
    product: () => `<span slot="${"product"}">Netlify</span>`,
    default: () => `<svg class="${"filter group-hover:text-[#00C7B7] group-hover:drop-shadow-lg drop-shadow w-12 h-12 ml-2 mr-4 my-5 fill-current"}" role="${"img"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><title>Netlify</title><path d="${"M17.3877 8.3286l-.0088-.0037c-.005-.002-.01-.0038-.0144-.0082a.0689.0689 0 0 1-.0176-.0582l.4839-2.9581 2.269 2.2696L17.74 8.574a.052.052 0 0 1-.0206.0037H17.71a.0647.0647 0 0 1-.0126-.0106 1.074 1.074 0 0 0-.3097-.2385zm3.291-.1802l2.4262 2.426c.5039.5045.7561.7562.8481 1.0479.0138.0431.025.0863.0338.1308l-5.798-2.4555a.4557.4557 0 0 0-.0093-.0038c-.0232-.0094-.0501-.02-.0501-.0439 0-.0237.0275-.035.0507-.0444l.0075-.0031zm3.2092 4.3833c-.1252.2354-.3693.4795-.7824.8932l-2.7353 2.7347-3.5377-.7367-.0188-.0038c-.0313-.005-.0645-.0107-.0645-.0388a1.0678 1.0678 0 0 0-.41-.7467c-.0144-.0144-.0106-.037-.0063-.0576 0-.003 0-.0063.0013-.0088l.6654-4.0848.0025-.0138c.0038-.0313.0094-.0676.0376-.0676a1.0829 1.0829 0 0 0 .726-.4162c.0056-.0063.0094-.0131.017-.0169.02-.0094.0437 0 .0644.0088l6.0402 2.555zm-4.1467 4.257l-4.498 4.4979.77-4.732.0012-.0063a.083.083 0 0 1 .0038-.0182c.0063-.015.0226-.0213.0382-.0275l.0075-.0031a1.158 1.158 0 0 0 .435-.3236c.015-.0176.0332-.0345.0564-.0376a.0563.0563 0 0 1 .0181 0l3.1672.651zm-5.45 5.4499l-.507.507-5.6052-8.1007a.2654.2654 0 0 0-.0062-.0088c-.0088-.012-.0182-.0238-.0163-.0376.0006-.01.0069-.0188.0138-.0263l.0062-.0081c.017-.025.0313-.05.047-.077l.0125-.0219.0019-.0019c.0087-.015.0169-.0294.0319-.0376.0131-.0063.0313-.0038.0457-.0006l6.2098 1.2807a.1027.1027 0 0 1 .0476.0206c.008.0081.01.017.0119.027a1.0998 1.0998 0 0 0 .6434.7354c.0175.0088.01.0282.002.0488a.149.149 0 0 0-.0095.0282c-.0782.4757-.7492 4.568-.9295 5.6728zm-1.059 1.0584c-.3737.37-.594.5659-.8432.6447a1.2519 1.2519 0 0 1-.7549 0c-.2916-.0926-.5439-.3442-1.0478-.8487l-5.629-5.629 1.4704-2.2802a.0938.0938 0 0 1 .025-.0294c.0157-.0113.0382-.0063.057 0a1.5235 1.5235 0 0 0 1.0253-.052c.0169-.0063.0338-.0106.0469.0013a.119.119 0 0 1 .0175.02l5.6327 8.174zm-8.8175-6.3756L3.1234 15.63l2.55-1.0879a.0526.0526 0 0 1 .0207-.0044c.0213 0 .0338.0213.045.0407a1.8214 1.8214 0 0 0 .0814.1152l.0082.01c.0075.0106.0025.0213-.005.0313l-1.4084 2.1864zm-1.8628-1.8628L.9183 13.4249c-.278-.2779-.4795-.4794-.6197-.6528l4.9674 1.0303a.5258.5258 0 0 0 .0187.003c.0307.005.0645.0107.0645.0395 0 .0313-.037.0457-.0682.0576l-.0144.0063zM.0132 11.932a1.2519 1.2519 0 0 1 .0563-.3098c.0927-.2917.3443-.5434.8488-1.0478l2.0906-2.0906a1361.7196 1361.7196 0 0 0 2.8955 4.1855c.017.0226.0357.0476.0163.0664-.0914.1008-.1828.211-.2473.3305a.1001.1001 0 0 1-.0313.0388c-.008.005-.0169.003-.0262.0013h-.0013l-5.6014-1.175zm3.5553-4.0078l2.811-2.811c.2641.1157 1.2256.522 2.0856.885.651.2754 1.2443.5258 1.4308.6071.0188.0076.0357.015.0439.0338.005.0113.0025.0257 0 .0376a1.2537 1.2537 0 0 0 .3273 1.1442c.0188.0188 0 .0457-.0163.0689l-.0088.0131-2.8542 4.421c-.0075.0124-.0144.023-.0269.0312-.015.0094-.0363.005-.0538.0006a1.4234 1.4234 0 0 0-.34-.0463c-.1026 0-.214.0188-.3266.0395h-.0007c-.0125.0019-.0238.0044-.0338-.0031a.1314.1314 0 0 1-.0281-.032zm3.3787-3.3788l3.6391-3.639c.504-.5039.7562-.7561 1.0478-.8481a1.2519 1.2519 0 0 1 .755 0c.2916.092.5438.3442 1.0477.848l.7887.7888-2.5882 4.0084a.097.097 0 0 1-.0257.03c-.0156.0107-.0375.0063-.0563 0a1.3126 1.3126 0 0 0-1.2018.2316c-.0169.0176-.042.0075-.0632-.0019-.338-.147-2.967-1.258-3.343-1.4177zm7.8278-2.3009l2.3898 2.3898-.5758 3.5665v.0094a.0845.0845 0 0 1-.005.0238c-.0063.0125-.0188.015-.0313.0188a1.1454 1.1454 0 0 0-.343.1709.0964.0964 0 0 0-.0125.0106c-.007.0075-.0138.0144-.025.0157a.0714.0714 0 0 1-.027-.0044l-3.6416-1.5473-.007-.0031c-.0231-.0094-.0506-.0207-.0506-.0445a1.3758 1.3758 0 0 0-.194-.5727c-.0176-.0288-.037-.0588-.022-.0883zm-2.461 5.3868l3.4138 1.446c.0188.0087.0394.0168.0476.0362a.0663.0663 0 0 1 0 .0357.848.848 0 0 0-.0188.1646v.0958c0 .0238-.0244.0338-.047.0432l-.0069.0025c-.5408.231-7.5924 3.238-7.603 3.238-.0107 0-.022 0-.0326-.0107-.0188-.0188 0-.0451.0169-.0689a.4757.4757 0 0 0 .0087-.0125l2.8054-4.344.005-.0074c.0163-.0263.035-.0557.0651-.0557l.0282.0043c.0638.0088.1202.017.1771.017.4257 0 .82-.2072 1.0579-.5615a.1001.1001 0 0 1 .0212-.025c.017-.0126.042-.0063.0614.0024zm-3.9095 5.7492l7.6863-3.278s.0113 0 .022.0106c.0419.042.0776.0701.112.0964l.0169.0107c.0156.0088.0313.0188.0325.035 0 .0063 0 .01-.0013.0157l-.6584 4.0447-.0025.0163c-.0044.0313-.0088.067-.0382.067a1.0822 1.0822 0 0 0-.8594.5301l-.0031.005c-.0088.0144-.017.0282-.0313.0357-.0131.0063-.03.0038-.0438.0006L8.5064 13.706c-.0063-.0013-.0952-.3249-.102-.3255z"}"></path></svg>`
  })}
      ${validate_component(ObjCard, "ObjCard").$$render($$result, {}, {}, {
    text: () => `<span slot="${"text"}">It&#39;s Trello, on Steroids</span>`,
    product: () => `<span slot="${"product"}">Jira</span>`,
    default: () => `<svg class="${"filter group-hover:text-[#172B4D] group-hover:drop-shadow-lg drop-shadow w-12 h-12 ml-2 mr-4 my-5 fill-current"}" role="${"img"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><title>Jira</title><path d="${"M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h2.13v2.057A5.215 5.215 0 0 0 12.575 24V12.518a1.005 1.005 0 0 0-1.005-1.005zm5.723-5.756H5.736a5.215 5.215 0 0 0 5.215 5.214h2.129v2.058a5.218 5.218 0 0 0 5.215 5.214V6.758a1.001 1.001 0 0 0-1.001-1.001zM23.013 0H11.455a5.215 5.215 0 0 0 5.215 5.215h2.129v2.057A5.215 5.215 0 0 0 24 12.483V1.005A1.001 1.001 0 0 0 23.013 0Z"}"></path></svg>`
  })}
      ${validate_component(ObjCard, "ObjCard").$$render($$result, {}, {}, {
    text: () => `<span slot="${"text"}">Google Docs, on Steroids</span>`,
    product: () => `<span slot="${"product"}">Confluence</span>`,
    default: () => `<svg class="${"filter group-hover:text-[#172B4D] group-hover:drop-shadow-lg drop-shadow w-12 h-12 ml-2 mr-4 my-5 fill-current"}" role="${"img"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><title>Confluence</title><path d="${"M.87 18.257c-.248.382-.53.875-.763 1.245a.764.764 0 0 0 .255 1.04l4.965 3.054a.764.764 0 0 0 1.058-.26c.199-.332.454-.763.733-1.221 1.967-3.247 3.945-2.853 7.508-1.146l4.957 2.337a.764.764 0 0 0 1.028-.382l2.364-5.346a.764.764 0 0 0-.382-1 599.851 599.851 0 0 1-4.965-2.361C10.911 10.97 5.224 11.185.87 18.257zM23.131 5.743c.249-.405.531-.875.764-1.25a.764.764 0 0 0-.256-1.034L18.675.404a.764.764 0 0 0-1.058.26c-.195.335-.451.763-.734 1.225-1.966 3.246-3.945 2.85-7.508 1.146L4.437.694a.764.764 0 0 0-1.027.382L1.046 6.422a.764.764 0 0 0 .382 1c1.039.49 3.105 1.467 4.965 2.361 6.698 3.246 12.392 3.029 16.738-4.04z"}"></path></svg>`
  })}
      ${validate_component(ObjCard, "ObjCard").$$render($$result, {}, {}, {
    text: () => `<span slot="${"text"}">Like Confluence and Jira had a baby</span>`,
    product: () => `<span slot="${"product"}">Notion</span>`,
    default: () => `<svg class="${"filter group-hover:text-[#000] group-hover:drop-shadow-lg drop-shadow w-12 h-12 ml-2 mr-4 my-5 fill-current"}" role="${"img"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><title>Notion</title><path d="${"M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"}"></path></svg>`
  })}
      ${validate_component(ObjCard, "ObjCard").$$render($$result, {}, {}, {
    text: () => `<span slot="${"text"}">Modern Websites (without code)</span>`,
    product: () => `<span slot="${"product"}">Webflow</span>`,
    default: () => `<svg class="${"filter group-hover:text-[#4353FF] group-hover:drop-shadow-lg drop-shadow w-12 h-12 ml-2 mr-4 my-5 fill-current"}" role="${"img"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><title>Webflow</title><path d="${"M17.802 8.56s-1.946 6.103-2.105 6.607a4778.8 4778.8 0 0 0-1.484-11.473c-3.316 0-5.089 2.36-6.026 4.851l-2.565 6.637c-.015-.476-.36-6.565-.36-6.565-.204-3.052-3-4.91-5.262-4.91l2.739 16.6c3.474-.015 5.347-2.361 6.328-4.852 0 0 2.09-5.398 2.176-5.643.015.23 1.5 10.494 1.5 10.494 3.488 0 5.362-2.202 6.37-4.606L24 3.708c-3.445 0-5.261 2.346-6.198 4.851Z"}"></path></svg>`
  })}
      ${validate_component(ObjCard, "ObjCard").$$render($$result, {}, {}, {
    text: () => `<span slot="${"text"}">Database Operations without the hassle</span>`,
    product: () => `<span slot="${"product"}">Airtable</span>`,
    default: () => `<svg class="${"filter group-hover:text-[#18BFFF] group-hover:drop-shadow-lg drop-shadow w-12 h-12 ml-2 mr-4 my-5 fill-current"}" role="${"img"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><title>Airtable</title><path d="${"M11.992 1.966c-.434 0-.87.086-1.28.257L1.779 5.917c-.503.208-.49.908.012 1.116l8.982 3.558a3.266 3.266 0 0 0 2.454 0l8.982-3.558c.503-.196.503-.908.012-1.116l-8.957-3.694a3.255 3.255 0 0 0-1.272-.257zM23.4 8.056a.589.589 0 0 0-.222.045l-10.012 3.877a.612.612 0 0 0-.38.564v8.896a.6.6 0 0 0 .821.552L23.62 18.1a.583.583 0 0 0 .38-.551V8.653a.6.6 0 0 0-.6-.596zM.676 8.095a.644.644 0 0 0-.48.19C.086 8.396 0 8.53 0 8.69v8.355c0 .442.515.737.908.54l6.27-3.006.307-.147 2.969-1.436c.466-.22.43-.908-.061-1.092L.883 8.138a.57.57 0 0 0-.207-.044z"}"></path></svg>`
  })}
      ${validate_component(ObjCard, "ObjCard").$$render($$result, {}, {}, {
    text: () => `<span slot="${"text"}">How SEO babies are made.</span>`,
    product: () => `<span slot="${"product"}">Search Console</span>`,
    default: () => `<svg class="${"filter group-hover:text-[#458CF5] group-hover:drop-shadow-lg drop-shadow w-12 h-12 mx-2 my-5 fill-current"}" role="${"img"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><title>Google Search Console</title><path d="${"M8.548 1.156L6.832 2.872v1.682h1.716zm0 3.398v.035H6.832v-.035H3.386L0 7.844v3.577h2.826V8.94c0-.525.429-.954.954-.954h16.476c.525 0 .954.43.954.954v2.48h2.754V7.844l-3.386-3.29H17.3v.035h-1.717v-.035zm7.035 0H17.3V2.872l-1.717-1.716zM8.679 1.188V2.84h6.773V1.188zm11.471 7.07a.834.834 0 00-.132.01l-.543.002c-5.216.014-10.432-.008-15.648.01-.435-.063-.794.436-.716.883v2.264h17.812c-.016-.888.045-1.782-.034-2.666-.104-.342-.427-.502-.739-.502zm-15.422.634a.689.698 0 01.689.698.689.698 0 01-.689.697.689.698 0 01-.688-.697.689.698 0 01.688-.698zm2.134 0a.689.698 0 01.689.698.689.698 0 01-.689.697.689.698 0 01-.688-.697.689.698 0 01.688-.698zM.036 11.645v9.156c0 1.05.858 1.908 1.907 1.908h.883V11.645zm21.174 0v11.064h.882c1.05 0 1.908-.858 1.908-1.908v-9.156zM4.057 13.133v6.85h6.137v-6.85zm13.243.021v3.777l-1.708.977-1.708-.977v-3.758a4.006 4.006 0 000 7.23v2.441h3.457v-2.442a4.006 4.006 0 00-.041-7.248zm-13.243 8.26v1.43h7.925v-1.43z"}"></path></svg>`
  })}</div></div></section>
<section class="${"dark:bg-coolGray-800 dark:text-coolGray-100 mx-8"}"><div class="${"container p-6 mx-auto space-y-6 text-center lg:p-8 lg:space-y-8"}"><h2 class="${"text-3xl sm:text-4xl text-gray-800 font-bold"}">Creative Tools of choice</h2>
    <div class="${"flex flex-wrap justify-center lg:justify-between"}">${validate_component(ObjCard, "ObjCard").$$render($$result, {}, {}, {
    text: () => `<span slot="${"text"}">Vector graphics and prototyping!</span>`,
    product: () => `<span slot="${"product"}">Figma</span>`,
    default: () => `<i class="${"fab fa-figma fa-3x filter group-hover:text-[#F24E1E] group-hover:drop-shadow-lg drop-shadow w-12 h-12 ml-2 mr-4 my-5 fill-current"}" title="${"Figma"}" alt="${"Figma"}"></i>`
  })}
      ${validate_component(ObjCard, "ObjCard").$$render($$result, {}, {}, {
    text: () => `<span slot="${"text"}">It&#39;s a video editor... That&#39;s all it does</span>`,
    product: () => `<span slot="${"product"}">Premiere Pro</span>`,
    default: () => `<svg role="${"img"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"filter group-hover:text-[#9999FF] group-hover:drop-shadow-lg drop-shadow w-12 h-12 ml-2 mr-4 my-5 fill-current"}"><title>Adobe Premiere Pro</title><path d="${"M10.15 8.42a2.93 2.93 0 00-1.18-.2 13.9 13.9 0 00-1.09.02v3.36l.39.02h.53c.39 0 .78-.06 1.15-.18.32-.09.6-.28.82-.53.21-.25.31-.59.31-1.03a1.45 1.45 0 00-.93-1.46zM19.75.3H4.25A4.25 4.25 0 000 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm-7.09 11.65c-.4.56-.96.98-1.61 1.22-.68.25-1.43.34-2.25.34l-.5-.01-.43-.01v3.21a.12.12 0 01-.11.14H5.82c-.08 0-.12-.04-.12-.13V6.42c0-.07.03-.11.1-.11l.56-.01.76-.02.87-.02.91-.01c.82 0 1.5.1 2.06.31.5.17.96.45 1.34.82.32.32.57.71.73 1.14.15.42.23.85.23 1.3 0 .86-.2 1.57-.6 2.13zm6.82-3.15v1.95c0 .08-.05.11-.16.11a4.35 4.35 0 00-1.92.37c-.19.09-.37.21-.51.37v5.1c0 .1-.04.14-.13.14h-1.97a.14.14 0 01-.16-.12v-5.58l-.01-.75-.02-.78c0-.23-.02-.45-.04-.68a.1.1 0 01.07-.11h1.78c.1 0 .18.07.2.16a3.03 3.03 0 01.13.92c.3-.35.67-.64 1.08-.86a3.1 3.1 0 011.52-.39c.07-.01.13.04.14.11v.04z"}"></path></svg>`
  })}
      ${validate_component(ObjCard, "ObjCard").$$render($$result, {}, {}, {
    text: () => `<span slot="${"text"}">A video editor that edits like a doc!</span>`,
    product: () => `<span slot="${"product"}">Descript</span>`,
    default: () => `<img src="${"https://theme.zdassets.com/theme_assets/9876708/2993b0431fd68dc0833b90ae5fd545b066c257e8.png"}" alt="${"Descript's Logo"}" class="${"grayscale brightness-0 transition duration-200 group-hover:drop-shadow-lg -translate-y-1 group-hover:brightness-100 group-hover:grayscale-0 filter mx-2 my-auto w-11 h-11"}" height="${"24"}" width="${"24"}">`
  })}
      ${validate_component(ObjCard, "ObjCard").$$render($$result, {}, {}, {
    text: () => `<span slot="${"text"}">Visual effects, and animations</span>`,
    product: () => `<span slot="${"product"}">After Effects</span>`,
    default: () => `<svg role="${"img"}" class="${"filter group-hover:text-[#9999FF] group-hover:drop-shadow-lg drop-shadow w-12 ml-2 mr-4 my-5 fill-current"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><title>Adobe After Effects</title><path d="${"M8.54 10.73c-.1-.31-.19-.61-.29-.92s-.19-.6-.27-.89c-.08-.28-.15-.54-.22-.78h-.02c-.09.43-.2.86-.34 1.29-.15.48-.3.98-.46 1.48-.13.51-.29.98-.44 1.4h2.54c-.06-.21-.14-.46-.23-.72-.09-.27-.18-.56-.27-.86zm8.58-.29c-.55-.03-1.07.26-1.33.76-.12.23-.19.47-.22.72h2.109c.26 0 .45 0 .57-.01.08-.01.16-.03.23-.08v-.1c0-.13-.021-.25-.061-.37-.178-.56-.708-.94-1.298-.92zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm-7.04 16.511h-2.09c-.07.01-.14-.041-.16-.11l-.82-2.4H5.92l-.76 2.36c-.02.09-.1.15-.19.14H3.09c-.11 0-.14-.06-.11-.18L6.2 7.39c.03-.1.06-.19.1-.31.04-.21.06-.43.06-.65-.01-.05.03-.1.08-.11h2.59c.07 0 .12.03.13.08l3.65 10.25c.03.11.001.161-.1.161zm7.851-3.991c-.021.189-.031.33-.041.42-.01.07-.069.13-.14.13-.06 0-.17.01-.33.021-.159.02-.35.029-.579.029-.23 0-.471-.04-.73-.04h-3.17c.039.31.14.62.31.89.181.271.431.48.729.601.4.17.841.26 1.281.25.35-.011.699-.04 1.039-.11.311-.039.61-.119.891-.23.05-.039.08-.02.08.08v1.531c0 .039-.01.08-.021.119-.021.03-.04.051-.069.07-.32.14-.65.24-1 .3-.471.09-.94.13-1.42.12-.761 0-1.4-.12-1.92-.35-.49-.211-.921-.541-1.261-.95-.319-.39-.55-.83-.69-1.31-.14-.471-.209-.961-.209-1.461 0-.539.08-1.07.25-1.59.16-.5.41-.96.75-1.37.33-.4.739-.72 1.209-.95.471-.23 1.03-.31 1.67-.31.531-.01 1.06.09 1.55.31.41.18.77.45 1.05.8.26.34.47.72.601 1.14.129.4.189.81.189 1.22 0 .24-.01.45-.019.64z"}"></path></svg>`
  })}
      ${validate_component(ObjCard, "ObjCard").$$render($$result, {}, {}, {
    text: () => `<span slot="${"text"}">The secret to making photos prettier</span>`,
    product: () => `<span slot="${"product"}">Lightroom</span>`,
    default: () => `<svg class="${"filter group-hover:text-[#31A8FF] group-hover:drop-shadow-lg drop-shadow w-12 h-12 ml-2 mr-4 my-5 fill-current"}" role="${"img"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><title>Adobe Lightroom</title><path d="${"M19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm-6.99 16.389c0 .051-.029.09-.06.121-.03.02-.06.029-.101.029H6.26c-.11 0-.16-.061-.16-.18V6.44c-.01-.07.04-.13.11-.14h2c.05-.01.11.03.11.08v8.43h4.62c.101 0 .131.049.11.14l-.29 1.739zm6.25-7.859v1.95c0 .08-.05.11-.16.11-.649-.04-1.3.08-1.89.34-.2.09-.39.21-.54.37v5.1c0 .1-.04.14-.13.14h-1.95c-.08.01-.15-.04-.16-.119V11.14c0-.24 0-.49-.01-.75s-.01-.52-.02-.78c-.01-.22-.03-.44-.061-.66-.01-.05.02-.1.07-.11.01-.01.02-.01.04 0h1.75c.1 0 .18.07.21.16.04.07.07.15.08.23.02.1.039.21.05.31.01.11.021.23.021.36.299-.35.66-.64 1.069-.86.46-.25.97-.37 1.49-.36.069-.01.13.04.14.11.001.01.001.02.001.04z"}"></path></svg>`
  })}
      ${validate_component(ObjCard, "ObjCard").$$render($$result, {}, {}, {
    text: () => `<span slot="${"text"}">Photo manipulation, you know it</span>`,
    product: () => `<span slot="${"product"}">Photoshop</span>`,
    default: () => `<svg class="${"filter group-hover:text-[#31A8FF] group-hover:drop-shadow-lg drop-shadow w-12 h-12 ml-2 mr-4 my-auto fill-current"}" role="${"img"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><title>Adobe Photoshop</title><path d="${"M9.85 8.42c-.37-.15-.77-.21-1.18-.2-.26 0-.49 0-.68.01-.2-.01-.34 0-.41.01v3.36c.14.01.27.02.39.02h.53c.39 0 .78-.06 1.15-.18.32-.09.6-.28.82-.53.21-.25.31-.59.31-1.03.01-.31-.07-.62-.23-.89-.17-.26-.41-.46-.7-.57zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.899c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm-7.391 11.65c-.399.56-.959.98-1.609 1.22-.68.25-1.43.34-2.25.34-.24 0-.4 0-.5-.01s-.24-.01-.43-.01v3.209c.01.07-.04.131-.11.141H5.52c-.08 0-.12-.041-.12-.131V6.42c0-.07.03-.11.1-.11.17 0 .33 0 .56-.01.24-.01.49-.01.76-.02s.56-.01.87-.02c.31-.01.61-.01.91-.01.82 0 1.5.1 2.06.31.5.17.96.45 1.34.82.32.32.57.71.73 1.14.149.42.229.85.229 1.3.001.86-.199 1.57-.6 2.13zm7.091 3.89c-.28.4-.671.709-1.12.891-.49.209-1.09.318-1.811.318-.459 0-.91-.039-1.359-.129-.35-.061-.7-.17-1.02-.32-.07-.039-.121-.109-.111-.189v-1.74c0-.029.011-.07.041-.09.029-.02.06-.01.09.01.39.23.8.391 1.24.49.379.1.779.15 1.18.15.38 0 .65-.051.83-.141.16-.07.27-.24.27-.42 0-.141-.08-.27-.24-.4-.16-.129-.489-.279-.979-.471-.51-.18-.979-.42-1.42-.719-.31-.221-.569-.51-.761-.85-.159-.32-.239-.67-.229-1.021 0-.43.12-.84.341-1.21.25-.4.619-.72 1.049-.92.469-.239 1.059-.349 1.769-.349.41 0 .83.03 1.24.09.3.04.59.12.86.23.039.01.08.05.1.09.01.04.02.08.02.12v1.63c0 .04-.02.08-.05.1-.09.02-.14.02-.18 0-.3-.16-.62-.27-.96-.34-.37-.08-.74-.13-1.12-.13-.2-.01-.41.02-.601.07-.129.03-.24.1-.31.2-.05.08-.08.18-.08.27s.04.18.101.26c.09.11.209.2.34.27.229.12.47.23.709.33.541.18 1.061.43 1.541.73.33.209.6.49.789.83.16.318.24.67.23 1.029.011.471-.129.94-.389 1.331z"}"></path></svg>`
  })}
      ${validate_component(ObjCard, "ObjCard").$$render($$result, {}, {}, {
    text: () => `<span slot="${"text"}">Vector Illustrations, made easier</span>`,
    product: () => `<span slot="${"product"}">Illustrator</span>`,
    default: () => `<svg class="${"filter group-hover:text-[#FF9A00] group-hover:drop-shadow-lg drop-shadow w-12 h-12 ml-2 mr-4 my-auto fill-current"}" role="${"img"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><title>Adobe Illustrator</title><path d="${"M10.53 10.73c-.1-.31-.19-.61-.29-.92-.1-.31-.19-.6-.27-.89-.08-.28-.15-.54-.22-.78h-.02c-.09.43-.2.86-.34 1.29-.15.48-.3.98-.46 1.48-.14.51-.29.98-.44 1.4h2.54c-.06-.211-.14-.46-.23-.721-.09-.269-.18-.559-.27-.859zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zM14.7 16.83h-2.091c-.069.01-.139-.04-.159-.11l-.82-2.38H7.91l-.76 2.35c-.02.09-.1.15-.19.141H5.08c-.11 0-.14-.061-.11-.18L8.19 7.38c.03-.1.06-.21.1-.33.04-.21.06-.43.06-.65-.01-.05.03-.1.08-.11h2.59c.08 0 .12.03.13.08l3.65 10.3c.03.109 0 .16-.1.16zm3.4-.15c0 .11-.039.16-.129.16H16.01c-.1 0-.15-.061-.15-.16v-7.7c0-.1.041-.14.131-.14h1.98c.09 0 .129.05.129.14v7.7zm-.209-9.03c-.231.24-.571.37-.911.35-.33.01-.65-.12-.891-.35-.23-.25-.35-.58-.34-.92-.01-.34.12-.66.359-.89.242-.23.562-.35.892-.35.391 0 .689.12.91.35.22.24.34.56.33.89.01.34-.11.67-.349.92z"}"></path></svg>`
  })}
      ${validate_component(ObjCard, "ObjCard").$$render($$result, {}, {}, {
    text: () => `<span slot="${"text"}">Social Media Tool for scheduling posts</span>`,
    product: () => `<span slot="${"product"}">Buffer</span>`,
    default: () => `<svg class="${"filter group-hover:text-[#231F20] group-hover:drop-shadow-lg drop-shadow w-12 h-12 ml-2 mr-4 my-auto fill-current"}" role="${"img"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><title>Buffer</title><path d="${"M1.371 5.476L11.943 0l10.686 5.476-10.686 5.495zm3.36 4.81l7.212 3.547 7.288-3.547 3.398 1.655-10.686 5.202L1.371 11.94zm0 6.171l7.212 3.911 7.288-3.91 3.398 1.815L11.943 24 1.371 18.273z"}"></path></svg>`
  })}
      ${validate_component(ObjCard, "ObjCard").$$render($$result, {}, {}, {
    text: () => `<span slot="${"text"}">Every column is a social media feed!</span>`,
    product: () => `<span slot="${"product"}">Hootsuite</span>`,
    default: () => `<svg class="${"filter group-hover:text-[#143059] group-hover:drop-shadow-lg drop-shadow w-12 h-12 ml-2 mr-4 my-auto sm:my-5 fill-current"}" role="${"img"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><title>Hootsuite</title><path d="${"M12.002 0h.023c1.311.004 2.603.322 3.766.928C16.948.332 18.23.022 19.532.022h.676V24l-.656-.002C15.369 24 11.356 22.336 8.4 19.373 5.43 16.43 3.77 12.414 3.791 8.23V.021h.677c1.301 0 2.586.311 3.741.906C9.381.318 10.682 0 12.002 0zm0 .654c-1.381 0-2.676.373-3.791 1.021-1.138-.655-2.428-1.001-3.742-1h-.022V8.23c-.025 8.35 6.764 15.09 15.107 15.113V.675h-.022c-1.313-.001-2.604.343-3.743.999-1.144-.666-2.443-1.018-3.766-1.02h-.021zm3.252 2.754c1.79.002 3.238 1.453 3.237 3.242-.003 1.791-1.454 3.238-3.244 3.236-.616 0-1.22-.176-1.739-.508l-1.516 1.508-1.507-1.516c-1.514.952-3.515.495-4.465-1.02-.952-1.516-.495-3.516 1.021-4.467s3.516-.494 4.467 1.022c.273.437.44.933.483 1.446l.016-.02.015.018c.154-1.667 1.556-2.945 3.232-2.941zM8.76 8.789c1.192.006 2.163-.959 2.168-2.15.001-.219-.031-.436-.096-.644-.243.544-.882.788-1.426.546-.545-.244-.79-.883-.546-1.428.109-.243.304-.437.548-.547-1.137-.355-2.347.276-2.705 1.414-.066.207-.099.424-.1.642-.003 1.192.96 2.163 2.153 2.167h.004zm6.478.019c1.193.003 2.163-.962 2.166-2.155s-.963-2.162-2.155-2.164c-.216-.002-.431.03-.638.094.545.244.789.883.547 1.428-.244.543-.883.787-1.428.545-.245-.109-.439-.307-.549-.553-.355 1.139.279 2.352 1.417 2.707.209.063.423.097.64.098z"}"></path></svg>`
  })}
      ${validate_component(ObjCard, "ObjCard").$$render($$result, {}, {}, {
    text: () => `<span slot="${"text"}">CRMs, it&#39;s not just for sales</span>`,
    product: () => `<span slot="${"product"}">Hubspot</span>`,
    default: () => `<i class="${"fab fa-hubspot transition duration-200 stroke-3 group-hover:text-orange-400 group-hover:drop-shadow-lg fa-3x filter drop-shadow w-12 h-12 ml-2 mr-4 my-auto fill-current"}" title="${"hubspot"}" alt="${"hubspot"}"></i>`
  })}</div></div></section>`;
});
var index$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": About
});
var Blog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>The Blog!</title>`, ""}<meta rel="${"description"}" content="${"Thoughts and ideas about product, content, and startups"}" data-svelte="svelte-aqzowq">`, ""}
${validate_component(Header, "Header").$$render($$result, {}, {}, {
    subtitle: () => `<span slot="${"subtitle"}">Thoughts and ideas on product, design, and startups.</span>`,
    title: () => `<span slot="${"title"}">The Blog!</span>`
  })}`;
});
var index$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Blog
});
var metadata = {
  "title": "Writing User Story Flows",
  "description": null,
  "author": "Theodore Nikolai Idris",
  "twitter": "https://twitter.com/theonikomao",
  "linkedin": "https://linkedin.com/in/theonikolai",
  "instagram": "https://instagram.com/theonikolai"
};
var Writing_User_Story_Flows = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>Rethinking User Stories</h1>
<p>While writing user personas may seem daunting, they aren\u2019t.</p>
<p>It boils down to understanding understanding what your audience might be thinking as they explore your site. Chances are, if you know why you built your product in the first place, you should already know who your buyers are, and what their personalities are like.</p>
<p>Instead of thinking of \u201CWhat Tim the marketer is like,\u201D think about the problems they\u2019re trying to solve. What is their \u201Cjob to be done,\u201D and is your product a good fit as a solution?</p>
<p>For example, you might have made a Social Media Listener tool. The problem you\u2019re solving could be, \u201Cif only I could keep track of these conversations, and understand what people think about my company\u201D.</p>
<p>User Stories are really just your users\u2019 thought processes have when they\u2019re looking for a solution, navigating through your website, and exploring your product.</p>
<p>There are a number of frameworks available but your should always ask yourself:-</p>
<ol><li>What problems were they facing that led to them searching for your solution?</li>
<li>What did they do to find a solution to their problem? (did they search on LinkedIn, ask for referrals\u2026)</li>
<li>What were their frustrations with other solutions they\u2019ve tried to fix their problems?</li>
<li>Why would they consider your product after experiencing similar solutions, or worse yet - if they haven\u2019t even heard of your prouct?</li>
<li>What is it about your product or your content that prompted them to approach you in the first place.</li></ol>
<p>With that in mind, try to write down your users\u2019 journey as descriptive as you can. If you ever get stuck, try being inspirated by your own experiences. Chances are, someone else already shares the same frustrations as you do.</p>`;
});
var WritingUserStoryFlows = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Writing_User_Story_Flows,
  metadata
});
var Work = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let videos = [
    {
      title: "Showreel 2020",
      client: "Various",
      tag: "Video",
      caption: "My showreel from 2020, featuring some of my latest work of that year",
      id: "ZGA-ILL6dkQ",
      alt: "A boy with a headband holding up a rasengan"
    },
    {
      title: "Japanese Garlic Fried Rice",
      client: "None",
      tag: "Video",
      caption: "A cooking video, inspired by <a class='text-blue-500 underline font-semibold hover:font-bold hover:text-blue-600' href='https://www.youtube.com/watch?v=86QgYvlWEU0'>Alvin's cooking videos</a> from Tasty",
      id: "DvqI1LAlARY",
      alt: "A bowl of delicious Japanese garlic fried rice"
    },
    {
      title: "Cheong Kwan Jang Ninjas",
      client: "Beat Nation",
      tag: "Video",
      caption: "A parody commercial commissioned for the South Korean Ginseng company, Korea Ginseng Corporation",
      id: "LSXGokGMxLc",
      alt: "A box of Cheong Kwan Jang Korean Ginseng, sitting pleasantly on a fluffy red pillow. #totallynotsellingout"
    },
    {
      title: "I Wanna Dance With Somebody",
      client: "An Honest Mistake",
      tag: "Video",
      caption: "Whitney Houston's Classic, performed by Malaysian Pop Punk band, An Honest Mistake",
      id: "teGZOg8Ne74",
      alt: "I Wanna Dance With Somebody, covered by An Honest Mistake, featuring Haziq from I Lost The Plot"
    }
  ];
  return `${$$result.head += `${$$result.title = `<title>Notable Work by Theo Nikolai</title>`, ""}`, ""}

${validate_component(Header, "Header").$$render($$result, {}, {}, {
    subtitle: () => `<span slot="${"subtitle"}">What would you like to watch?</span>`,
    title: () => `<span slot="${"title"}">My video portfolio</span>`
  })}
${each(videos, ({ title, caption, id, alt, client, tag }) => `<a class="${"justify-center group z-0 transition duration-300 max-w-2xl filter group mx-auto bg-white drop-shadow flex flex-col hover:scale-105 hover:z-20 hover:drop-shadow-md"}" href="${"https://www.youtube.com/watch?v=" + escape(id)}"><article class="${"flex flex-wrap items-center justify-center pb-6 my-4 transition-all text-coolGray-600 shadow-lg md:pb-16 md:flex-nowrap lg:max-w-5xl xl:pb-0 md:text-left group-hover:shadow-xl border group-hover:text-blueGray-800 group-hover:bg-indigo-200"}"><img class="${"w-screen mb-2 sm:w-72 drop-shadow sm:h-max hover:scale-105 hover:drop-shadow-xl hover:-translate-y-1 filter transition duration-300"}" src="${"https://i.ytimg.com/vi/" + escape(id) + "/mqdefault.jpg"}"${add_attribute("alt", alt, 0)}>
      <div class="${"flex px-2 flex-col md:ml-4 md:pr-8"}"><h2 class="${"text-xl mt-2 font-bold"}">${escape(title)}</h2>
        <p class="${"text-xs my-0.5 text-gray-500"}">Client: ${escape(client)}</p>
        <p class="${"font-medium leading-snug md:mb-2"}"><!-- HTML_TAG_START -->${caption}<!-- HTML_TAG_END --></p>
        <p class="${"text-xs relative -translate-y-1 -translate-x-1 border-2 font-semibold border-violet-200 bg-violet-300 py-1 px-2 w-max rounded-full group-hover:drop-shadow-sm filter transition duration-300"}">${escape(tag)}</p>
      </div></article>
  </a>`)}`;
});
var index = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Work
});

// .svelte-kit/netlify/entry.js
init();
async function handler(event) {
  const { path, httpMethod, headers, rawQuery, body, isBase64Encoded } = event;
  const query = new URLSearchParams(rawQuery);
  const encoding = isBase64Encoded ? "base64" : headers["content-encoding"] || "utf-8";
  const rawBody = typeof body === "string" ? Buffer.from(body, encoding) : body;
  const rendered = await render({
    method: httpMethod,
    headers,
    path,
    query,
    rawBody
  });
  if (rendered) {
    return {
      isBase64Encoded: false,
      statusCode: rendered.status,
      ...splitHeaders(rendered.headers),
      body: rendered.body
    };
  }
  return {
    statusCode: 404,
    body: "Not found"
  };
}
function splitHeaders(headers) {
  const h = {};
  const m = {};
  for (const key in headers) {
    const value = headers[key];
    const target = Array.isArray(value) ? m : h;
    target[key] = value;
  }
  return {
    headers: h,
    multiValueHeaders: m
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
