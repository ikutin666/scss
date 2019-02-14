var $=require('jquery');
require('../scss/style.scss');

$('div').append('<input type="text" class="awesome_input">');//добовляем новые
$('.awesome_input').on('change', function(event)
	{
		$($(event.target).parent().children()[0]).val(($(event.target)).val());//добовляем значение в скрытые поля

	}
);
	$('form').on('submit',function(event)
	{
		var obj=$('input');
		$.each(obj,function(key,value)
		{
			if($(value).val()=="")
			{
				alert("не все поля заполнены!!! ");
				event.preventDefault();
				
			}
		}
		);
	}
	);