const CLASS_NAME_FILTER_NOT_SELECTED = "filter-not-selected-class";
const CLASS_NAME_FILTER_SELECTED = "filter-selected-class";
const CLASS_NAME_SEARCH_TEXT = "search-text-class";
const ID_SEARCH_TEXT = "search-text-id";

function getFilterHtml(filter) {
	return '<span id="'+filter+'" class='+CLASS_NAME_FILTER_NOT_SELECTED+'>'+filter+'</span>';
}
function getFiltersHtml() {
	var html = "<div>";
	for (filter of SUPPORTED_FILTER) {
		html += getFilterHtml(filter);
	}
	return html + "</div>";
}

function deselectAllFilters() {
	var filterElements = document.getElementsByClassName(CLASS_NAME_FILTER_SELECTED);
    for(var filterElement of filterElements) {
        filterElement.className = CLASS_NAME_FILTER_NOT_SELECTED;
    }
}
function selectFilterById(id) {
	document.getElementById(id).className = CLASS_NAME_FILTER_SELECTED;
}

function getSearchTextBox() {
	return '<input type="text" class="'+CLASS_NAME_SEARCH_TEXT+'" id="'+ID_SEARCH_TEXT+'">';
}
function getSearchBoxHtml() {
	var html = "<form onSubmit=\"event.preventDefault()\">"+getSearchTextBox()+"</form>";
	return html;
}