var frameModule = require("ui/frame");

exports.showImage = function(url) {
    var imageInfo = JTSImageInfo.alloc().init();
    imageInfo.imageURL = NSURL.URLWithString(url);

    var imageViewer = JTSImageViewController.alloc().initWithImageInfoModeBackgroundStyle(
        imageInfo,
        JTSImageViewControllerMode_Image,
        JTSImageViewControllerBackgroundOption_Scaled
    );
    imageViewer.showFromViewControllerTransition(
        frameModule.topmost().ios.controller,
        JTSImageViewControllerTransition_FromOriginalPosition
    );
}
