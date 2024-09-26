

app.Script( "D20.js");
app.Script( "Global.js");

app.Script( "FactoryLayout.js" );
app.Script( "PathardryLayout.js" );

//Called when application is started.
function OnStart()
{
	
	//Title screen
	lay = layout_title();
	viewtree.push(lay);
	app.AddLayout( lay );
	
	//app.ShowPopup(diceRoll(2,6), "Short");
}