$(document).ready(function() {
    $('body').on('click', 'a[data-role="delete"]', function(e){
        e.preventDefault();
        $toDelete = $(this);
        var conf = bootbox.confirm("Are you sure?", function(result){
            if(result == true){
                $.ajax({
                    url: $toDelete.attr("href"),
                    type: "delete"
                }).then(function(response){
                    $toDelete.parents($toDelete.attr("data-delete-parent")).remove();
                });
            }
        });
    });
});