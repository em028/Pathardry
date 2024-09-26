
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
	PCid++;
	PCs.push(new PlayerCharacter());
	app.DestroyLayout(viewtree[viewtree.length-1]);
	app.AddLayout(layout_newcharaname());
}

function btn_deletechara_OnTouch() {
	
}

function btn_exitfactory_OnTouch() {
	PCs.length -= 1;
	PCid--;
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
	PCs[PCid].setPcName = etxt_newcharaname.GetText();
}

function btn_newcharanameok_OnTouch() {
	if (PCs[PCid].getPcName != "") {
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
	
	lay_newcharaability = app.CreateLayout("Linear","Vertical,Center");
	
	img_newcharaability = app.CreateImage("Img/img_factory.png", 1, 0.28);
	
	txt_newcharaabilityname = app.CreateText("名前："+PCs[PCid].getPcName, -1, -1, "SingleLine");
	txt_newcharaabilityname.SetFontFile("fonts/PixelMplus12-Regular.ttf");
	txt_newcharaabilityname.SetTextSize(24);
	
	txt_newcharaabilitystr = app.CreateText("力強さ："+PCs[PCid].getSTR, -1, -1, "SingleLine");
	txt_newcharaabilitystr.SetFontFile("fonts/PixelMplus12-Regular.ttf");
	txt_newcharaabilitystr.SetTextSize(24);
	
	txt_newcharaabilitydex = app.CreateText("機敏性："+PCs[PCid].getDEX, -1, -1, "SingleLine");
	txt_newcharaabilitydex.SetFontFile("fonts/PixelMplus12-Regular.ttf");
	txt_newcharaabilitydex.SetTextSize(24);
	
	txt_newcharaabilitycon = app.CreateText("耐久力："+PCs[PCid].getCON, -1, -1, "SingleLine");
	txt_newcharaabilitycon.SetFontFile("fonts/PixelMplus12-Regular.ttf");
	txt_newcharaabilitycon.SetTextSize(24);
	
	txt_newcharaabilityint = app.CreateText("分析力："+PCs[PCid].getINT, -1, -1, "SingleLine");
	txt_newcharaabilityint.SetFontFile("fonts/PixelMplus12-Regular.ttf");
	txt_newcharaabilityint.SetTextSize(24);
	
	txt_newcharaabilitywis = app.CreateText("先見性："+PCs[PCid].getWIS, -1, -1, "SingleLine");
	txt_newcharaabilitywis.SetFontFile("fonts/PixelMplus12-Regular.ttf");
	txt_newcharaabilitywis.SetTextSize(24);
	
	txt_newcharaabilityluc = app.CreateText("幸運度："+PCs[PCid].getLUC, -1, -1, "SingleLine");
	txt_newcharaabilityluc.SetFontFile("fonts/PixelMplus12-Regular.ttf");
	txt_newcharaabilityluc.SetTextSize(24);
	
	btn_newCharaAbilityRoll = app.CreateButton("Dice roll", 1, -1);
	btn_newCharaAbilityRoll.SetFontFile("fonts/PixelMplus12-Regular.ttf");
	btn_newCharaAbilityRoll.SetTextSize(24);
	btn_newCharaAbilityRoll.SetOnTouch( btn_newCharaAbilityRoll_OnTouch );
	
	btn_newCharaAbilityOk = app.CreateButton("決定", 1, -1);
	btn_newCharaAbilityOk.SetFontFile("fonts/PixelMplus12-Regular.ttf");
	btn_newCharaAbilityOk.SetTextSize(24);
	btn_newCharaAbilityOk.SetOnTouch( btn_newCharaAbilityOk_OnTouch );
	
	btn_exitNewCharaAbility = app.CreateButton("戻る", 1, -1);
	btn_exitNewCharaAbility.SetFontFile("fonts/PixelMplus12-Regular.ttf");
	btn_exitNewCharaAbility.SetTextSize(24);
	btn_exitNewCharaAbility.SetOnTouch( btn_exitNewCharaAbility_OnTouch );
	
	lay_newcharaability.AddChild(img_newcharaability);
	lay_newcharaability.AddChild(txt_newcharaabilityname);
	lay_newcharaability.AddChild(txt_newcharaabilitystr);
	lay_newcharaability.AddChild(txt_newcharaabilitydex);
	lay_newcharaability.AddChild(txt_newcharaabilitycon);
	lay_newcharaability.AddChild(txt_newcharaabilityint);
	lay_newcharaability.AddChild(txt_newcharaabilitywis);
	lay_newcharaability.AddChild(txt_newcharaabilityluc);
	lay_newcharaability.AddChild(btn_newCharaAbilityRoll);
	lay_newcharaability.AddChild(btn_newCharaAbilityOk);
	lay_newcharaability.AddChild(btn_exitNewCharaAbility);
	
	
	viewtree.push(lay_newcharaability);
	
	return lay_newcharaability;
}

function btn_newCharaAbilityRoll_OnTouch() {
	PCs[PCid].setSTR = diceRoll(2,6)+6;
	PCs[PCid].setDEX = diceRoll(2,6)+6;
	PCs[PCid].setCON = diceRoll(2,6)+6;
	PCs[PCid].setINT = diceRoll(2,6)+6;
	PCs[PCid].setWIS = diceRoll(2,6)+6;
	PCs[PCid].setLUC = diceRoll(2,6)+6;
	txt_newcharaabilitystr.SetText("力強さ："+PCs[PCid].getSTR);
	txt_newcharaabilitydex.SetText("機敏性："+PCs[PCid].getDEX);
	txt_newcharaabilitycon.SetText("耐久力："+PCs[PCid].getCON) ;
	txt_newcharaabilityint.SetText("分析力："+PCs[PCid].getINT);
	txt_newcharaabilitywis.SetText("先見性："+PCs[PCid].getWIS);
	txt_newcharaabilityluc.SetText("幸運度："+PCs[PCid].getLUC);
	
}

function btn_newCharaAbilityOk_OnTouch() {
	app.RemoveLayout(viewtree[viewtree.length-1]);
	app.AddLayout(layout_newCharaRace());
}

function btn_exitNewCharaAbility_OnTouch() {
	app.DestroyLayout(viewtree.pop());
	viewtree.length = viewtree.length-1;
	app.AddLayout(layout_newcharaname());
}


/*
	Choose player's race.
*/
function layout_newCharaRace() {
	app.ShowPopup(viewtree.length);
	
	lay_newCharaRace = app.CreateLayout("Linear","Vertical,Center");
	
	img_newCharaRace = app.CreateImage("Img/img_factory.png", 1, 0.28);
	
	txt_newCharaRace = app.CreateText("種族を選択して下さい。", -1, -1, "SingleLine");
	txt_newCharaRace.SetFontFile("fonts/PixelMplus12-Regular.ttf");
	txt_newCharaRace.SetTextSize(24);
	
	btn_newCharaRaceHuman = app.CreateButton("人間", 1, -1);
	btn_newCharaRaceHuman.SetFontFile("fonts/PixelMplus12-Regular.ttf");
	btn_newCharaRaceHuman.SetTextSize(24);
	btn_newCharaRaceHuman.SetOnTouch( btn_newCharaRaceHuman_OnTouch );
	
	btn_newCharaRaceDwarf = app.CreateButton("ドワーフ", 1, -1);
	btn_newCharaRaceDwarf.SetFontFile("fonts/PixelMplus12-Regular.ttf");
	btn_newCharaRaceDwarf.SetTextSize(24);
	btn_newCharaRaceDwarf.SetOnTouch( btn_newCharaRaceDwarf_OnTouch );
	
	btn_newCharaRaceElf = app.CreateButton("エルフ", 1, -1);
	btn_newCharaRaceElf.SetFontFile("fonts/PixelMplus12-Regular.ttf");
	btn_newCharaRaceElf.SetTextSize(24);
	btn_newCharaRaceElf.SetOnTouch( btn_newCharaRaceElf_OnTouch );
	
	btn_newCharaRaceHobit = app.CreateButton("ホビット", 1, -1);
	btn_newCharaRaceHobit.SetFontFile("fonts/PixelMplus12-Regular.ttf");
	btn_newCharaRaceHobit.SetTextSize(24);
	btn_newCharaRaceHobit.SetOnTouch( btn_newCharaRaceHobit_OnTouch );
	
	btn_newCharaRaceOrc = app.CreateButton("オーク", 1, -1);
	btn_newCharaRaceOrc.SetFontFile("fonts/PixelMplus12-Regular.ttf");
	btn_newCharaRaceOrc.SetTextSize(24);
	btn_newCharaRaceOrc.SetOnTouch( btn_newCharaRaceOrc_OnTouch );
	
	btn_exitNewCharaRace = app.CreateButton("戻る", 1, -1);
	btn_exitNewCharaRace.SetFontFile("fonts/PixelMplus12-Regular.ttf");
	btn_exitNewCharaRace.SetTextSize(24);
	btn_exitNewCharaRace.SetOnTouch( btn_exitNewCharaRace_OnTouch );
	
	lay_newCharaRace.AddChild(img_newCharaRace);
	lay_newCharaRace.AddChild(txt_newCharaRace);
	lay_newCharaRace.AddChild(btn_newCharaRaceHuman);
	lay_newCharaRace.AddChild(btn_newCharaRaceDwarf);
	lay_newCharaRace.AddChild(btn_newCharaRaceElf);
	lay_newCharaRace.AddChild(btn_newCharaRaceHobit);
	lay_newCharaRace.AddChild(btn_newCharaRaceOrc);
	lay_newCharaRace.AddChild( btn_exitNewCharaRace );
	
	viewtree.push(lay_newCharaRace);
	
	return lay_newCharaRace;
}

function btn_newCharaRaceHuman_OnTouch() {
	PCs[PCid].setRace = 0;
	PCs[PCid].setSTR = PCs[PCid].getSTR + 1;
	PCs[PCid].setWIS = PCs[PCid].getWIS + 1;
	PCs[PCid].setCON = PCs[PCid].getCON - 1;
	app.RemoveLayout(viewtree[viewtree.length-1]);
	app.AddLayout(layout_newCharaJob());
}

function btn_newCharaRaceDwarf_OnTouch() {
	PCs[PCid].setRace = 1;
	PCs[PCid].setCON = PCs[PCid].getCON + 2;
	PCs[PCid].setWIS = PCs[PCid].getWIS + 2;
	PCs[PCid].setDEX = PCs[PCid].getDEX - 2;
	app.RemoveLayout(viewtree[viewtree.length-1]);
	app.AddLayout(layout_newCharaJob());
}

function btn_newCharaRaceElf_OnTouch() {
	PCs[PCid].setRace = 2;
	PCs[PCid].setDEX = PCs[PCid].getDEX + 2;
	PCs[PCid].setINT = PCs[PCid].getINT + 2;
	PCs[PCid].setCON = PCs[PCid].getCON - 2;
	app.RemoveLayout(viewtree[viewtree.length-1]);
	app.AddLayout(layout_newCharaJob());
}

function btn_newCharaRaceHobit_OnTouch() {
	PCs[PCid].setRace = 3;
	PCs[PCid].setDEX = PCs[PCid].getDEX + 2;
	PCs[PCid].setLUC = PCs[PCid].getLUC + 4;
	PCs[PCid].setSTR = PCs[PCid].getSTR - 2;
	app.RemoveLayout(viewtree[viewtree.length-1]);
	app.AddLayout(layout_newCharaJob());
}

function btn_newCharaRaceOrc_OnTouch() {
	PCs[PCid].setRace = 4;
	PCs[PCid].setSTR = PCs[PCid].getSTR + 2;
	PCs[PCid].setCON = PCs[PCid].getCON + 2;
	PCs[PCid].setINT = PCs[PCid].getINT - 2;
	PCs[PCid].setWIS = PCs[PCid].getWIS - 2;
	PCs[PCid].setLUC = PCs[PCid].getLUC - 2;
	app.RemoveLayout(viewtree[viewtree.length-1]);
	app.AddLayout(layout_newCharaJob());
}

function btn_exitNewCharaRace_OnTouch() {
	app.DestroyLayout(viewtree.pop());
	viewtree.length = viewtree.length-1;
	app.AddLayout(layout_newcharaability());
}


/*
	New Character Job
*/

function layout_newCharaJob() {
	app.ShowPopup(viewtree.length);
	
	lay_newCharaJob = app.CreateLayout("Linear","Vertical,Center");
	
	img_newCharaJob = app.CreateImage("Img/img_factory.png", 1, 0.28);
	
	lay_newCharaJob.AddChild(img_newCharaJob);
	
	viewtree.push(lay_newCharaJob);
	
	return lay_newCharaJob;
};
}