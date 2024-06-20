module.exports = {
    extends: [
       "stylelint-config-standard-scss",
    	"stylelint-config-recommended-vue/scss",
        {
            "rules": {
                "selector-class-pattern":null,
                "font-family-no-missing-generic-family-keyword": null,
                "scss/double-slash-comment-whitespace-inside": "never",
                "no-empty-source": null
            }
        }
    ]
}
