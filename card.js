const CLASS_NAME_CARD = "card-class";

function getCallSpan() {
	return "<span style=\"margin-right:10px;color:blue;\">Call</span>"
}
function getWhatsAppImage() {
	return "<img src=\"https://img.icons8.com/color/48/000000/whatsapp.png\" style=\"width:20;position: relative;top: 4;\"/>";
}
function getWhatsAppSpan() {
	return "<span style=\"margin-right:10px;\">"+getWhatsAppImage()+"Whatsapp</span>"
}
function bottomSection() {
	return "<div>" + getCallSpan() + getWhatsAppSpan() + "</div>"
}
function getTitle(obj) {
	return "<div>"+obj.title+"</div>";
}
function getPrice(obj) {
	return "<div>"+obj.price+"</div>";
}
function getCreative(obj) {
	return "<div>"+obj.creative+"</div>";
}
function getCardHtml(obj) {
	return getTitle(obj)+getPrice(obj)+getCreative(obj)+bottomSection();
}
function getCardsHtml(objs) {
	var html = "";
	for (var obj of objs) {
		html = html + '<div class="'+CLASS_NAME_CARD+'">' + getCardHtml(obj) + "</div><hr/>";
	}
	return html;
}