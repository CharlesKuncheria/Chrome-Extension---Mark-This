// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

  var selectionLength = parseInt(window.localStorage.getItem('additionalSelectionLength'));

for (var i = 0; i < selectionLength; i++) {
   var selection = JSON.parse(window.localStorage.getItem('additionalSelection' + i));
   document.getElementById('container').innerHTML += "<div><h4>Item</h4>" + selection.selectionText + "<h4>Page</h4>" + selection.pageUrl + "</div>";
}