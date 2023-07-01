let btns = document.querySelectorAll("button");
let p = document.querySelector(".wrapper-text p");
  p.style.whiteSpace = "pre-wrap";

let span = document.querySelector("span");

btns.forEach((e) => {
  e.addEventListener("click", () => {
    let _tempcopy = e.innerText;
    span.innerText = _tempcopy;

    switch (e.innerText) {
      case "带他去上厕所":
        changeHandlerFunction("点头", "摇头", "小孩子很开心地说：“巴适得很嘞，你也来哇？”此时你要……");
        break;
      case "点头":
      changeHandlerFunction("拿拖鞋板", "拿捕鼠夹", "小孩子对着你比了个“羞羞”就跑了，旁边的便利店突然传来老板的惊叫：“有曱甴！”此时你要……");

        break;
      case "拿捕鼠夹":
        changeHandlerFunction(
          "“我是中国人”",
          "“你才是边度人”",
          "便利店老板茫然地看了你一眼，道：“你系边度人”，此时你要……"
        );
        break;
      case "“我是中国人”":
        changeHandlerFunction("“好”", "“我不要”", "旁边的成衣店老板听后立马热情地拿起一件“中国李宁”招呼：“码咋嘞”，此时你要……");
        break;
      case "摇头":
        changeHandlerFunction(
          "查看他的脑门",
          "查看他的膝盖",
          "小孩子伤心地跑了，撞到了一个老人，老人叫了一声“我的波棱盖”就蹲了下去，你打算帮帮他，此时你要……"
        );
        break;
      case "查看他的脑门":
        changeHandlerFunction(
          "送他去医院",
          "送他去警察局",
          "老人见你这样，说：“我浑身都贼闹挺”，此时你要……"
        );
        break;
      case "拿拖鞋板":
        changeHandlerFunction("“虾子”", "“虾”", "你拿着拖鞋板打死来了便利店的蟑螂，老板很感谢你，叫来隔壁成衣店老板，他来时一手螃蟹一手虾问你想吃什么，此时你要……");
        break;
      case "“虾子”":
      case "“虾”":
        changeHandlerFunction(
          "“谢谢大家，我很开心”",
          "“我不用了”",
          "螃蟹很好吃，但饭桌上一直有一个人问你哈不哈啤，此时你要……"
        );
        break;
        //第一题
      case "给他买冰淇淋":
        changeHandlerFunction(
          "叫的肯定是我，我走过去",
          "叫的是这个小孩子吧",
          "小孩子吃了你的冰淇淋又开始大哭，旁边的老人拄着拐杖叫了一声“细娃”招了招手，此时你要……"
        );
        break;
      case "叫的肯定是我，我走过去":
        changeHandlerFunction(
          "送他去警察局",
          "送他去医院",
          "老人瞪了你一会，拐杖往腿上一杵说：“你搞伐子？”此时你要……"
        );
        break;
      case "叫的是这个小孩子吧":
        changeHandlerFunction("查看他的脑门","查看他的膝盖", "小孩子没听懂，跑开的时候撞到了撞到了一个老人，老人叫了一声“我的波棱盖”就蹲了下去，你打算帮帮他，此时你要……");
        break;
      case "“我不用了”":
        changeHandlerFunction(
          "“我ok”",
          "“算了吧”",
          "三个老板很喜欢你，便利店老板问：“侬和我哋合作咩”，此时你要……"
        );
        break;
      case "送他去医院":
      case "“好”":
        changeHandlerFunction("重新游戏", "进入主页", "你破产了");
        break;
      case "“你才是边度人”":
      case "“谢谢大家，我很开心”":
        changeHandlerFunction(
          "重新游戏",
          "进入主页",
          "被送进了精神病院"
        );
        break;
      case "“我不要”":
      case "送他去警察局":
      case "查看他的膝盖":
        changeHandlerFunction(
          "重新游戏",
          "进入主页",
          "好险，差点就破产了"
        );
        break;

      case "“我ok”":
        changeHandlerFunction("重新游戏", "进入主页", "你大赚一笔");
        break;
      case "“算了吧”":
        changeHandlerFunction(
          "重新游戏",
          "进入主页",
          "好险，差点就发财了"
        );
        break;
        case"进入主页":
          window.location.href="index.html";
      default:
        defaultHandlerFunction();


    }
  });
});

function defaultHandlerFunction() {
  document.body.style.backgroundImage = "none";
  document.body.style.backgroundColor = "rgb(30,53,57)";
  p.innerText = "一个迷路的小孩子拦住了你对你说：“我想解手。”此时你要……";
  span.innerText = " ";
  btns[1].style.display = "block";
  btns[0].innerText = "带他去上厕所";
  btns[1].innerText = "给他买冰淇淋";
}

let changeHandlerFunction = function (option1, option2, text) {
  p.innerText = text;



  btns[0].innerText = option1;
  btns[1].innerText = option2;
  if (span.innerText === "bitch slapped me") {
    document.body.style.backgroundImage =
      "url('https://i1.sndcdn.com/artworks-000669834703-p0eue6-t500x500.jpg')";
    document.body.style.backgroundColor = "rgba(255, 248, 220,1)";
  }
  if (text === "被送进了精神病院") {
    document.body.style.backgroundImage =
      "url('assets/images/jsby.png')";
  }

  if (text === "你破产了") {
    document.body.style.backgroundImage =
      "url('assets/images/pc.png')";
  }

  if (text === "好险，差点就破产了") {
    document.body.style.backgroundImage =
      "url('assets/images/cdpc.png')";

  }
  if (text === "你大赚一笔") {
    document.body.style.backgroundImage =
      "url('fc.png')";}
  if (text === "好险，差点就发财了") {
        document.body.style.backgroundImage =
          "url('assets/images/cdfc.png')";}

};
