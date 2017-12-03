Template.toolbar.events({
    'click #btnAdd' : function(e){
        addSnippets();
    },
    'keypress #txtAdd' : function(e){
        debugger;
        if (e.keyCode!=13) return;
        addSnippets();
    }
});

function addSnippets(){
    debugger;
    var txtNode = $('#txtAdd');
    if (!txtNode || !txtNode.val()|| !Meteor.userId()) return;
    Snippets.insert({
        owner:Meteor.userId(),
        text:txtNode.val()});
    txtNode.val('');
}