chrome.runtime.sendMessage({type: "getTabs"}, function(tabs) {
    for(let tab of tabs) {
        const title = `(${++tab.index})-${tab.title}`;
        console.log(title, tab)
    }
})
