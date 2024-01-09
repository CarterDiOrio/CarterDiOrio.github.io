/**
 * Interface for data in a project description
 */
interface Description {
    /**
     * The name of the corresponding project
     */
    project: string;

    /**
     * The html string of the remarked markdown file
     */
    html: string;
}
export default Description;
