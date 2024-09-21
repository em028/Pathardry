
/*
Factory
*/
function layout_factory() {
	app.ShowPopup(viewtree.length);
	
	lay_factory = app.CreateLayout("Linear","Vertical");
	
	img_factory = app.CreateImage("Img/img_factory.png", 1, 0.28);
	
	btn_newchara = app.CreateButton("新人キャラ登録", 1, 0.08);
	btn_newchara.SetFontFile("fonts/PixelMplus12-Regular.ttf");
	btn_newchara.SetTextSize(21);
	btn_newchara.SetOnTouch(btn_newchara_OnTouch);
	
	btn_deletechara = app.CreateButton("既存キャラ削除", 1, 0.08);
	btn_deletechara.SetFontFile("fonts/PixelMplus12-Regular.ttf");
	btn_deletechara.SetTextSize(21);
	btn_deletechara.SetOnTouch(btn_deletechara_OnTouch);
	
	btn_exitfactory = app.CreateButton("戻る", 1, 0.08);
	btn_exitfactory.SetFontFile("fonts/PixelMplus12-Regular.ttf");
	btn_exitfactory.SetTextSize(21);
	btn_exitfactory.SetOnTouch(btn_exitfactory_OnTouch);
	
	lay_factory.AddChild(img_factory);
	lay_factory.AddChild(btn_newchara);
	lay_factory.AddChild(btn_deletechara);
	lay_factory.AddChild(btn_exitfactory);
	
	viewtree.push(lay_factory);
	
	return lay_factory;
}

function btn_newchara_OnTouch() {
	app.DestroyLayout(viewtree[viewtree.length-1]);
	app.AddLayout(layout_newcharaname());
}

function btn_deletechara_OnTouch() {
	
}

function btn_exitfactory_OnTouch() {
	app.DestroyLayout(viewtree.pop());
	viewtree.length = viewtree.length-1;
	app.AddLayout(layout_town());
}


/*
	Create New Player Charactor
*/
function layout_newcharaname() {
	app.ShowPopup(viewtree.length);
	
	lay_newcharaname = app.CreateLayout("Linear","Vertical");
	
	img_newcharaname = app.CreateImage("Img/img_factory.png", 1, 0.28);
	
	
	txt_newcharaname = app.CreateText("\n最初にキャラ名を決めてね。\n\n※なるべく愛着の沸かないキャラ名がいいと思う。\n\n", -1, -1, "Multiline");
	txt_newcharaname.SetFontFile("fonts/PixelMplus12-Regular.ttf");
	txt_newcharaname.SetTextSize(18);
	
	etxt_newcharaname = app.CreateTextEdit("",-1,0.08, "AutoSelect, SingleLine");
	etxt_newcharaname.SetTextSize(18);
	etxt_newcharaname.SetHint("ゆうしゃ");
	etxt_newcharaname.SetOnChange(etxt_newcharaname_OnChange)
	
	btn_newcharanameok = app.CreateButton("決定", 1, 0.08);
	btn_newcharanameok.SetFontFile("fonts/PixelMplus12-Regular.ttf");
	btn_newcharanameok.SetTextSize(19);
	btn_newcharanameok.SetOnTouch( btn_newcharanameok_OnTouch );
	
	btn_exitnewcharaname = app.CreateButton("戻る", 1, 0.08);
	btn_exitnewcharaname.SetFontFile("fonts/PixelMplus12-Regular.ttf");
	btn_exitnewcharaname.SetTextSize(19);
	btn_exitnewcharaname.SetOnTouch( btn_exitnewcharaname_OnTouch );
	
	lay_newcharaname.AddChild(img_newcharaname);
	lay_newcharaname.AddChild(txt_newcharaname);
	lay_newcharaname.AddChild(etxt_newcharaname);
	lay_newcharaname.AddChild(btn_newcharanameok);
	lay_newcharaname.AddChild(btn_exitnewcharaname);
	
	viewtree.push(lay_newcharaname);
	
	return lay_newcharaname;
}

function etxt_newcharaname_OnChange() {
	pc_temp.setPcName = etxt_newcharaname.GetText();
	//app.ShowPopup(pc_temp.getPcName);
}

function btn_newcharanameok_OnTouch() {
	if (pc_temp.getPcName != "") {
		app.RemoveLayout(viewtree[viewtree.length-1]);
		app.AddLayout(layout_newcharaability());
	}
}

function btn_exitnewcharaname_OnTouch() {
	app.DestroyLayout(viewtree.pop());
	viewtree.length = viewtree.length-1;
	app.AddLayout(layout_factory());
}


/*
	Determine Ability Score
*/
function layout_newcharaability() {
	app.ShowPopup(viewtree.length);
	
	lay_newcharaability = app.CreateLayout("Linear","Vertical");
	
	
	return lay_newcharaability;
}