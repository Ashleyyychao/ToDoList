const content = document.getElementById('content')
const date = document.getElementById('date')
const time = document.getElementById('time')
const addedBtn = document.getElementById('addedBtn')
const deletedBtn = document.getElementById('deletedBtn')
const list = document.getElementById('list')

const listContent = []




// function 



function render() {

  
    if(content.value==''){
    alert('記事內容不可以空！');
    content.focus();
    return false;
    }
    // 渲染頁面的list
    let htmlStr = ''

    listContent.forEach(function(self) {
      
        htmlStr = htmlStr + `
          <div class="item">
            <div>
              <p>內容：${self.content}</p>
              <p>時間：${self.date} ${self.time}</p>
            </div>
          </div>
          `
    })

    list.innerHTML = htmlStr
}


addedBtn.addEventListener('click', function() {

    listContent.unshift({
        content: content.value,
        date: date.value,
        time: time.value
    })

    render()

})

deletedBtn.addEventListener('click', function() {
    listContent.shift()

    render()
})