export default class Template {
    private static _compiler;
    /**
     * Compile a Handlebars template string and return a reusable render function.
     *
     * @param  {string} source Handlebars template source.
     * @return {HandlebarsTemplateDelegate<any>} Compiled template function.
     */
    static compile(source: string): HandlebarsTemplateDelegate<any>;
    /**
     * Return the Handlebars instance with all custom helpers registered.
     * Lazily initialized on first access.
     *
     * @return {typeof Handlebars} Configured Handlebars instance.
     */
    private static get compiler();
}
