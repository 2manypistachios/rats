import React from "react";
import CMS from "netlify-cms";
import "netlify-cms/dist/cms.css";

//CMS.registerPreviewStyle('/styles.css')
console.log("CMS", CMS);

var CategoriesControl = createClass({
    handleChange: function(e) {
      this.props.onChange(e.target.value.split(',').map((e) => e.trim()));
    },
  
    render: function() {
      var value = this.props.value;
      return h('input', { type: 'text', value: value ? value.join(', ') : '', onChange: this.handleChange });
    }
  });
  
  var CategoriesPreview = createClass({
    render: function() {
      return h('ul', {},
        this.props.value.map(function(val, index) {
          return h('li', {key: index}, val);
        })
      );
    }
  });
  
CMS.registerWidget('categories', CategoriesControl, CategoriesPreview);