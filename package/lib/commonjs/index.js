"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Frame: true
};
Object.defineProperty(exports, "Frame", {
  enumerable: true,
  get: function () {
    return _Frame.Frame;
  }
});
var _Camera = require("./Camera");
Object.keys(_Camera).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Camera[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Camera[key];
    }
  });
});
var _CameraDevice = require("./CameraDevice");
Object.keys(_CameraDevice).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _CameraDevice[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _CameraDevice[key];
    }
  });
});
var _CameraError = require("./CameraError");
Object.keys(_CameraError).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _CameraError[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _CameraError[key];
    }
  });
});
var _CameraPosition = require("./CameraPosition");
Object.keys(_CameraPosition).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _CameraPosition[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _CameraPosition[key];
    }
  });
});
var _CameraProps = require("./CameraProps");
Object.keys(_CameraProps).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _CameraProps[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _CameraProps[key];
    }
  });
});
var _Frame = require("./Frame");
var _FrameProcessorPlugins = require("./FrameProcessorPlugins");
Object.keys(_FrameProcessorPlugins).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _FrameProcessorPlugins[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _FrameProcessorPlugins[key];
    }
  });
});
var _PhotoFile = require("./PhotoFile");
Object.keys(_PhotoFile).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _PhotoFile[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _PhotoFile[key];
    }
  });
});
var _PixelFormat = require("./PixelFormat");
Object.keys(_PixelFormat).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _PixelFormat[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _PixelFormat[key];
    }
  });
});
var _Point = require("./Point");
Object.keys(_Point).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Point[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Point[key];
    }
  });
});
var _TemporaryFile = require("./TemporaryFile");
Object.keys(_TemporaryFile).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _TemporaryFile[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _TemporaryFile[key];
    }
  });
});
var _VideoFile = require("./VideoFile");
Object.keys(_VideoFile).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _VideoFile[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _VideoFile[key];
    }
  });
});
var _useCameraDevices = require("./hooks/useCameraDevices");
Object.keys(_useCameraDevices).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useCameraDevices[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useCameraDevices[key];
    }
  });
});
var _useCameraFormat = require("./hooks/useCameraFormat");
Object.keys(_useCameraFormat).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useCameraFormat[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useCameraFormat[key];
    }
  });
});
var _useFrameProcessor = require("./hooks/useFrameProcessor");
Object.keys(_useFrameProcessor).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useFrameProcessor[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useFrameProcessor[key];
    }
  });
});
var _FormatFilter = require("./utils/FormatFilter");
Object.keys(_FormatFilter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _FormatFilter[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _FormatFilter[key];
    }
  });
});
//# sourceMappingURL=index.js.map