





function layout_title() {
	lay = app.CreateLayout("Linear","Vertical");
	
	img_title = app.CreateImage("res/img_title.png", 1, 0.79);
	
	btn_start = app.CreateButton("始めから", 1, 0.07);
	btn_start.SetFontFile("PixelMplus12-Regular.ttf");
	btn_start.SetTextSize(24);
	btn_start.SetOnTouch(btn_start_OnTouch);
	
	btn_load = app.CreateButton("続きから", 1, 0.07);
	btn_load.SetFontFile("PixelMplus12-Regular.ttf");
	btn_load.SetTextSize(24);
	btn_load.SetOnTouch( btn_load_OnTouch );
	
	btn_credit = app.CreateButton("クレジット", 1, 0.07)
	btn_credit.SetFontFile("PixelMplus12-Regular.ttf");
	btn_credit.SetTextSize(24);
	btn_credit.SetOnTouch( btn_credit_OnTouch );
	
	lay.AddChild(img_title);
	
	lay.AddChild(btn_start);
	lay.AddChild(btn_load);
	lay.AddChild(btn_credit);
	
	return lay;
}

function btn_start_OnTouch() {
	lay_prev = viewtree[viewtree.length-1];
	app.RemoveLayout(lay_prev);
	lay = layout_town();
	viewtree.push(lay);
	app.AddLayout(lay);
}

function btn_load_OnTouch() {

}

function btn_credit_OnTouch() {

}

function layout_town() {
	lay = app.CreateLayout("Linear","Vertical");
	
	img_title = app.CreateImage("res/img_town.png", 1, 0.28);
	
	/*
困った時の神頼み
	*/
	btn_2palace  = app.CreateButton("クエスト三昧王宮", 1, 0.08);
	btn_2palace.SetFontFile("PixelMplus12-Regular.ttf");
	btn_2palace.SetTextSize(21);
	btn_2palace.SetOnTouch( btn_2palace_OnTouch );
	
	btn_2inn  = app.CreateButton("ほぼ野宿的な宿屋", 1, 0.08);
	btn_2inn.SetFontFile("PixelMplus12-Regular.ttf");
	btn_2inn.SetTextSize(21);
	btn_2inn.SetOnTouch( btn_2inn_OnTouch );
	
	btn_2tavern  = app.CreateButton("交代制勇者の酒場", 1, 0.08);
	btn_2tavern.SetFontFile("PixelMplus12-Regular.ttf");
	btn_2tavern.SetTextSize(21);
	btn_2tavern.SetOnTouch( btn_2tavern_OnTouch );
	
	btn_2shop  = app.CreateButton("最初から全揃い店", 1, 0.08);
	btn_2shop.SetFontFile("PixelMplus12-Regular.ttf");
	btn_2shop.SetTextSize(21);
	btn_2shop.SetOnTouch( btn_2shop_OnTouch );
	
	btn_2storage  = app.CreateButton("なんでも入る倉庫", 1, 0.08);
	btn_2storage.SetFontFile("PixelMplus12-Regular.ttf");
	btn_2storage.SetTextSize(21);
	btn_2storage.SetOnTouch( btn_2storage_OnTouch );
	
	btn_2factory  = app.CreateButton("超人造人間生産場", 1, 0.08);
	btn_2factory.SetFontFile("PixelMplus12-Regular.ttf");
	btn_2factory.SetTextSize(21);
	btn_2factory.SetOnTouch( btn_2factory_OnTouch );
	
	btn_2dungeon  = app.CreateButton("目指せ洞窟最深部", 1, 0.08);
	btn_2dungeon.SetFontFile("PixelMplus12-Regular.ttf");
	btn_2dungeon.SetTextSize(21);
	btn_2dungeon.SetOnTouch( btn_2dungeon_OnTouch );
	
	btn_2save  = app.CreateButton("まめにデータ保存", 1, 0.08);
	btn_2save.SetFontFile("PixelMplus12-Regular.ttf");
	btn_2save.SetTextSize(21);
	btn_2save.SetOnTouch( btn_2save_OnTouch );
	
	btn_2help  = app.CreateButton("困った時の神頼み", 1, 0.08);
	btn_2help.SetFontFile("PixelMplus12-Regular.ttf");
	btn_2help.SetTextSize(21);
	btn_2help.SetOnTouch( btn_2help_OnTouch );
	
	lay.AddChild(img_title);
	
	lay.AddChild(btn_2palace);
	lay.AddChild(btn_2inn);
	lay.AddChild(btn_2tavern);
	lay.AddChild(btn_2shop);
	lay.AddChild(btn_2storage);
	lay.AddChild(btn_2factory);
	lay.AddChild(btn_2dungeon);
	lay.AddChild(btn_2save);
	lay.AddChild(btn_2help);
	
	return lay;
	
}

function btn_2palace_OnTouch () {

}

function btn_2inn_OnTouch () {

}

function btn_2tavern_OnTouch () {

}

function btn_2shop_OnTouch () {

}

function btn_2storage_OnTouch () {

}

function btn_2factory_OnTouch () {
	lay_prev = viewtree[viewtree.length-1];
	app.RemoveLayout(lay_prev);
	lay = layout_factory();
	viewtree.push(lay);
	app.AddLayout(lay);
}

function btn_2dungeon_OnTouch () {

}

function btn_2save_OnTouch () {

}

function btn_2help_OnTouch () {

}