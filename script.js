/**This code is writtn by parag_vaishnav */
let b = document.getElementById( "add" );
let c = document.getElementById( "pop" );
let a = document.getElementById( "in" );
let xy = document.getElementById( "scrolleble" );
let be = document.getElementById( "dele" );
let notes = localStorage.getItem( "iteam" );
if ( notes == null )
{
    xy.style.display = "none";
    be.style.display = "none";
    show();
}
show();
b.addEventListener( "click", () =>
{
    let notes = localStorage.getItem( "iteam" );
    let err = "Enter the valid values";
    if ( a.value == "" )
    {
        show_alerts( err, "#e9a5a5", "#a10404" );
    }
    else
    {
        err = "One Iteam is successfully addedd";
        show_alerts( err, "", "" );

        if ( notes == null )
        {
            x = [];
        }
        else
        {
            x = JSON.parse( notes );
        }
        let to_insert = a.value;
        let fim = to_insert.charAt( 0 ).toUpperCase() + to_insert.slice( 1 );
        x.push( fim );
        d( x );
        a.value = null;
        xy.style.display = "block";
        be.style.display = "block";
        show();
    }
} );
d = ( data ) =>
{
    localStorage.setItem( "iteam", JSON.stringify( data ) );
};
function show ()
{
    let notes = localStorage.getItem( "iteam" );
    if ( notes == null )
    {
        x = [];
        be.style.display = "none";
    } else
    {
        x = JSON.parse( notes );
        if ( x.length <= 3 )
        {
            xy.style.overflowY = "hidden";
        }
        else
        {
            xy.style.overflowY = "scroll";
        }
    }
    let con = "";
    x.forEach( function ( value, index )
    {
        con += `<tr><td class="rec_1">${ value }</td>
        <td class="rec"><i id="edit" onclick="edit_item(${ index })" class="fas fa-edit"></i><i onclick="del_item(${ index })" class="fas fa-trash-alt"></i></td></tr>`;
    } );
    c.innerHTML = con;
};
function dele ()
{
    err = "All values are successfully deleted";
    show_alerts( err, "", "" );
    let notes = localStorage.getItem( "iteam" );
    if ( notes == null )
    {
        x = [];
    } else
    {
        x = JSON.parse( notes );
    }
    localStorage.clear();
    xy.style.display = "none";
    be.style.display = "none";
    show();
}

function del_item ( index )
{
    err = "One Iteam is deleted";
    show_alerts( err, "", "" );
    let notes = localStorage.getItem( "iteam" );
        if ( notes == null )
        {
            x = [];
        } else
        {
            x = JSON.parse( notes );
            if ( x.length <= 1 )
            {
                xy.style.display = "none";
                be.style.display = "none";
            }
        }
        x.splice( index, 1 );
        localStorage.setItem( "iteam", JSON.stringify( x ) );
        show();
}

/**Edit function  */

function edit_item ( index )
{
    b.style.visibility = "hidden";
    var sg = document.getElementById( "sp" );
    sg.innerHTML = `<input type="text" name="" id="in_edit" placeholder="eg. Biscutes">
    <input type="submit" value="Edit " id="edt"> `;
    let notes = localStorage.getItem( "iteam" );
    if ( notes == null )
    {
        x = [];
    } else
    {
        x = JSON.parse( notes );
    }
    let bet = document.getElementById( "edt" );
    let tx = document.getElementById( "in_edit" );
    tx.value = x[ index ];
    bet.addEventListener( "click", () =>
    {
        err = "value is successfully updated";
        show_alerts( err, "", "" );
        let p = tx.value;
        let q = p.charAt( 0 ).toUpperCase() + p.slice( 1 );
        x[ index ] = q;
        localStorage.setItem( "iteam", JSON.stringify( x ) );
        show();
        bet.style.display = "none";
        sg.innerHTML = `<input type="text" name="" id="in" placeholder="eg. Biscutes">
    <input type="submit" value="Add" id="add"> `;
    } );

}
show_alerts = ( err, back, color ) =>
{
    let raw = document.querySelector( "div.alerts" );
    let text = document.querySelector( "p#text" );
    raw.style.visibility = "visible";

    if ( back != "" && color != "" )
    {
        raw.style.background = back;
        text.style.color = color;
    }
    text.innerHTML = `${ err }`;
    setTimeout( () =>
    {
        raw.style.visibility = "hidden";
    }, 2000 );
};