# NativeScript Image Preview

A lightweight NativeScript plugin that wraps the [JTSImageViewController](https://cocoapods.org/pods/JTSImageViewController) CocoaPod.

## Installation

```
tns plugin add nativescript-image-preview
```

## Usage

```js
var imagePreview = require("nativescript-image-preview");
imagePreview.showImage("https://i.imgur.com/sKh7Z6R.png");
```

You can alternatively just use JTSImageViewController APIs documented on <http://cocoadocs.org/docsets/JTSImageViewController/>. This plugin makes them all available.
