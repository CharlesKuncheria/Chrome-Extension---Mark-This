// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// A generic onclick callback function.
function genericOnClick(info, tab) {
  var additionalSelection = {
    "pageUrl": info.pageUrl,
    "selectionText": info.selectionText
  };
   window.localStorage.setItem('additionalSelection' + collection.length, JSON.stringify(additionalSelection));
   collection.push(additionalSelection);
   window.localStorage.setItem('additionalSelectionLength', collection.length);
}

var collection = [];

// Create one test item for each context type.
var contexts = ["page","selection"];

for (var i = 0; i < contexts.length; i++) {
  var context = contexts[i];
  var title = "Mark " + context;
  var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                       "onclick": genericOnClick});
}

// Called when the user clicks on the browser action icon.
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({"url": "options.html"});
});
