jQuery(document).ready(function($){var e;$("#upload-profile").on("click",function(t){return t.preventDefault(),e?void e.open():(e=wp.media.frames.file_frame=wp.media({title:"Upload Profile Picture",button:{text:"Choose Image"},multiple:!1}),e.on("select",function(){attachment=e.state().get("selection").first().toJSON(),$("#submitted-picture").val(attachment.url)}),void e.open())});var t;$("#logo-image").on("click",function(e){return e.preventDefault(),t?void t.open():(t=wp.media.frames.file_frame=wp.media({title:"Upload Logo",button:{text:"Choose Image"},multiple:!1}),t.on("select",function(){attachment=t.state().get("selection").first().toJSON(),$("#submitted-logo").val(attachment.url),$("logo-preview").css("background","url("+attachment.url+")")}),void t.open())})});