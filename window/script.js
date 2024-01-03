/* eslint-disable no-undef */
nw.Screen.Init();

const screenCB = {
  onDisplayAdded: function (screen) {
    console.log('displayAdded', screen);
  },

  onDisplayRemoved: function (screen) {
    console.log('displayRemoved', screen);
  }
};

nw.Screen.on('displayAdded', screenCB.onDisplayAdded);
nw.Screen.on('displayRemoved', screenCB.onDisplayRemoved);


// nw.Screen.chooseDesktopMedia(['window', 'screen'],
//   function (streamId) {
//     let vid_constraint = {
//       mandatory: {
//         chromeMediaSource: 'desktop',
//         chromeMediaSourceId: streamId,
//         maxWidth: 1920,
//         maxHeight: 1080
//       },
//       optional: []
//     };
//     navigator.webkitGetUserMedia({ audio: false, video: vid_constraint }, success_func, fallback_func);
//   }
// );
