/**
 * @author renjiefang
 * @date  2019-06-16 19:38
 */
$(function() {
    var arr =[
        {
            'name': '任洁芳', tel: '15536913426', pinyin: 'renjiefang'
        },
        {
            'name': '洁芳', tel: '15536913424', pinyin: 'jiefang'
        },
        {
            'name': '妈妈', tel: '15531913426', pinyin: 'mama'
        },
        {
            'name': '爸爸', tel: '15531913426', pinyin: 'baba'
        },
        {
            'name': '弟弟', tel: '15531913426', pinyin: 'didi'
        },
        {
            'name': '芳', tel: '15536913326', pinyin: 'fang'
        },
        {
            'name': '姚旭飚', tel: '15536113426', pinyin: 'yaoxubiao'
        },
        {
            'name': '旭飚', tel: '15236913426', pinyin: 'xubiao'
        },
        {
            'name': '飚', tel: '15531913426', pinyin: 'biao'
        },
        {
            'name': '飚飚', tel: '15531913426', pinyin: 'biaobiao'
        },
        {
            'name': '小飚飚', tel: '15531913426', pinyin: 'xiaobiaobiao'
        },
        {
            'name': '任洁琼', tel: '15532913426', pinyin: 'renjieqiong'
        },
        {
            'name': '任洁玉', tel: '15536213426', pinyin: 'renjieyu'
        }

    ]
    let main = $('.main')
    let input = $('input')
    let aside = $('.aside')

    input.on('input', function() {
           let val = $(this).val()
           let newarr = arr.filter( (item) => {
                   return item.name.includes(val) || item.pinyin.includes(val)
           })
        render(newarr)
    })

      render(arr)

      function render(arr) {
           aside.empty()
           main.empty()
          let person = {}

          arr.forEach(function (item) {

              let number = item.pinyin.charAt(0).toUpperCase()
              console.log(number);
              if (!person[number]) {
                  person[number] = []
              }
              person[number].push(item)

          })

          let keys = Object.keys(person).sort()
          let content = ''
          let asidekey = ''
          for (let i = 0; i < keys.length; i++) {
              let keysnum = keys[i]
              content += `<section><h2>${keysnum}</h2>`;
              asidekey+= `<li>${keysnum}</li>`

              for (let j = 0; j < person[keysnum].length; j++) {

                  content += ` <div ><a href = "tel: ${person[keysnum][j].tel}" >${person[keysnum][j].name} </a></div>`
              }
              content += `</section>`
          }


          main.html(content)
          aside.html(asidekey)
      }

      aside.on('click', 'li', function() {
             let _this = $(this)
              let mainkey = $('section h2')
              _this.addClass('focus_li').siblings().removeClass('focus_li')
            if(_this.html() === mainkey.eq(_this.index()).html() ) {
                let sec = mainkey.eq(_this.index())[0].parentNode
                  let tops=sec.offsetTop - 50
                   console.log(tops);
                    $('.main').css( {top: -tops})
            }
      })

})