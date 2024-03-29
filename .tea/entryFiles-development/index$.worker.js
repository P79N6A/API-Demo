if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


var AFAppX = self.AFAppX;
self.getCurrentPages = AFAppX.getCurrentPages;
self.getApp = AFAppX.getApp;
self.Page = AFAppX.Page;
self.App = AFAppX.App;
self.my = AFAppX.bridge || AFAppX.abridge;
self.abridge = self.my;
self.Component = AFAppX.WorkerComponent || function(){};
self.$global = AFAppX.$global;


function success() {
require('../../app');
require('../../page/common/components/block-list/block-list');
require('../../node_modules/mini-antui/es/list/index');
require('../../node_modules/mini-antui/es/list/list-item/index');
require('../../node_modules/mini-antui/es/badge/index');
require('../../node_modules/mini-antui/es/tabs/index');
require('../../node_modules/mini-antui/es/tabs/tab-content/index');
require('../../node_modules/mini-antui/es/card/index');
require('../../node_modules/mini-antui/es/vtabs/index');
require('../../node_modules/mini-antui/es/vtabs/vtab-content/index');
require('../../node_modules/mini-antui/es/grid/index');
require('../../node_modules/mini-antui/es/steps/index');
require('../../node_modules/mini-antui/es/footer/index');
require('../../node_modules/mini-antui/es/popover/index');
require('../../node_modules/mini-antui/es/popover/popover-item/index');
require('../../node_modules/mini-antui/es/modal/index');
require('../../node_modules/mini-antui/es/popup/index');
require('../../node_modules/mini-antui/es/filter/index');
require('../../node_modules/mini-antui/es/filter/filter-item/index');
require('../../node_modules/mini-antui/es/page-result/index');
require('../../node_modules/mini-antui/es/message/index');
require('../../node_modules/mini-antui/es/tips/tips-dialog/index');
require('../../node_modules/mini-antui/es/tips/tips-plain/index');
require('../../node_modules/mini-antui/es/notice/index');
require('../../node_modules/mini-antui/es/swipe-action/index');
require('../../node_modules/mini-antui/es/amount-input/index');
require('../../node_modules/mini-antui/es/search-bar/index');
require('../../node_modules/mini-antui/es/calendar/index');
require('../../node_modules/mini-antui/es/stepper/index');
require('../../node_modules/mini-antui/es/input-item/index');
require('../../node_modules/mini-antui/es/picker-item/index');
require('../../node_modules/mini-antui/es/am-checkbox/index');
require('../../page/component/index');
require('../../page/component/button/button');
require('../../page/component/canvas/canvas');
require('../../page/component/checkbox/checkbox');
require('../../page/component/form/form');
require('../../page/component/icon/icon');
require('../../page/component/image/image');
require('../../page/component/input/input');
require('../../page/component/label/label');
require('../../page/component/map/map');
require('../../page/component/navigator/navigate');
require('../../page/component/navigator/redirect');
require('../../page/component/navigator/reLaunch');
require('../../page/component/navigator/navigator');
require('../../page/component/picker/picker');
require('../../page/component/picker-view/picker-view');
require('../../page/component/progress/progress');
require('../../page/component/radio/radio');
require('../../page/component/scroll-view/scroll-view');
require('../../page/component/slider/slider');
require('../../page/component/swiper/swiper');
require('../../page/component/switch/switch');
require('../../page/component/text/text');
require('../../page/component/textarea/textarea');
require('../../page/component/view/view');
require('../../page/component/lifestyle/lifestyle');
require('../../page/component/contact-button/contact-button');
require('../../page/component/webview/webview');
require('../../page/component/list/list');
require('../../page/component/tabs/tabs');
require('../../page/component/card/card');
require('../../page/component/vtabs/vtabs');
require('../../page/component/grid/grid');
require('../../page/component/steps/steps');
require('../../page/component/footer/footer');
require('../../page/component/popover/popover');
require('../../page/component/modal/modal');
require('../../page/component/popup/popup');
require('../../page/component/filter/filter');
require('../../page/component/page-result/page-result');
require('../../page/component/message/message');
require('../../page/component/tips/tips');
require('../../page/component/notice/notice');
require('../../page/component/swipe-action/swipe-action');
require('../../page/component/amount-input/amount-input');
require('../../page/component/badge/badge');
require('../../page/component/search-bar/search-bar');
require('../../page/component/calendar/calendar');
require('../../page/component/stepper/stepper');
require('../../page/component/input-item/input-item');
require('../../page/component/am-checkbox/am-checkbox');
require('../../page/component/favorite/favorite');
require('../../page/API/index/index');
require('../../page/API/events/events');
require('../../page/API/share/share');
require('../../page/API/action-sheet/action-sheet');
require('../../page/API/alert/alert');
require('../../page/API/animation/animation');
require('../../page/API/canvas/canvas');
require('../../page/API/card-pack/card-pack');
require('../../page/API/choose-city/choose-city');
require('../../page/API/choose-location/choose-location');
require('../../page/API/confirm/confirm');
require('../../page/API/contact/contact');
require('../../page/API/date-picker/date-picker');
require('../../page/API/option-menu/option-menu');
require('../../page/API/download-file/download-file');
require('../../page/API/file/file');
require('../../page/API/ocr/ocr');
require('../../page/API/ocr-idcard-face/ocr-idcard-face');
require('../../page/API/ocr-business-card/ocr-business-card');
require('../../page/API/ocr-vehicle/ocr-vehicle');
require('../../page/API/ocr-driver-license/ocr-driver-license');
require('../../page/API/ocr-business-license/ocr-business-license');
require('../../page/API/ocr-bank-card/ocr-bank-card');
require('../../page/API/ocr-train-ticket/ocr-train-ticket');
require('../../page/API/ocr-passport/ocr-passport');
require('../../page/API/ocr-general/ocr-general');
require('../../page/API/ocr-vehicle-plate/ocr-vehicle-plate');
require('../../page/API/ocr-vin/ocr-vin');
require('../../page/API/get-auth-code/get-auth-code');
require('../../page/API/get-location/get-location');
require('../../page/API/get-network-type/get-network-type');
require('../../page/API/get-system-info/get-system-info');
require('../../page/API/get-server-time/get-server-time');
require('../../page/API/get-user-info/get-user-info');
require('../../page/API/get-image-info/get-image-info');
require('../../page/API/image/image');
require('../../page/API/keyboard/keyboard');
require('../../page/API/loading/loading');
require('../../page/API/make-phone-call/make-phone-call');
require('../../page/API/memory-warning/memory-warning');
require('../../page/API/multi-level-select/multi-level-select');
require('../../page/API/options-select/options-select');
require('../../page/API/navigation-bar-loading/navigation-bar-loading');
require('../../page/API/navigator/navigator');
require('../../page/API/open-location/open-location');
require('../../page/API/pull-down-refresh/pull-down-refresh');
require('../../page/API/pay-sign-center/pay-sign-center');
require('../../page/API/request/request');
require('../../page/API/request-payment/request-payment');
require('../../page/API/scan-code/scan-code');
require('../../page/API/set-navigation-bar/set-navigation-bar');
require('../../page/API/show-auth-guide/show-auth-guide');
require('../../page/API/storage/storage');
require('../../page/API/toast/toast');
require('../../page/API/upload-file/upload-file');
require('../../page/API/vibrate/vibrate');
require('../../page/API/watch-shake/watch-shake');
require('../../page/API/clipboard/clipboard');
require('../../page/API/bluetooth/bluetooth');
require('../../page/API/rsa/rsa');
require('../../page/API/page-scroll-to/page-scroll-to');
require('../../page/API/websocket/websocket');
require('../../page/API/zm-credit-borrow/zm-credit-borrow');
require('../../page/API/create-selector-query/create-selector-query');
require('../../page/API/sdk-version/sdk-version');
require('../../page/API/user-capture-screen/user-capture-screen');
require('../../page/API/screen/screen');
require('../../page/API/compress-image/compress-image');
require('../../page/API/report-analytics/report-analytics');
require('../../page/common/search/search');
require('../../page/API/text-risk-identification/text-risk-identification');
require('../../page/component/video/video');
require('../../page/API/create-inner-audiocontext/create-inner-audiocontext');
require('../../page/API/get-background-audio-manager/get-background-audio-manager');
require('../../page/API/get-title-color/get-title-color');
require('../../page/API/start-zm-verify/start-zm-verify');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}