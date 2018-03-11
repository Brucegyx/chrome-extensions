chrome.browserAction.onClicked.addListener(function(tab) {
        console.log(tab);
        chrome.tabs.query({"active": true, "currentWindow":true}, function(tabs) {
        let currentTab = tabs[0];
        //console.log(currentTab.url);
            chrome.bookmarks.create(
                {'title': 'new bookmark folder',
                 
            }, onFolderCreated => chrome.bookmarks.create({
                'title': currentTab.title,
                'url': currentTab.url,
                'parentId': onFolderCreated.id

            }) );
        });
        
            
});