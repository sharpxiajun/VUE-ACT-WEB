/**
 * Created by fmj on 2017/4/10.
 * The permissions page load button
 */

let purviewButton = (policyPurview, menuPurview) => {
    if (policyPurview) {
        if (policyPurview.indexOf("query") != -1) {
            menuPurview.query = false;
        }
        if (policyPurview.indexOf("add") != -1) {
            menuPurview.add = false;
        }
        if (policyPurview.indexOf("import") != -1) {
            menuPurview.import = false;
        }
        if (policyPurview.indexOf("export") != -1) {
            menuPurview.export = false;
        }
        if (policyPurview.indexOf("modify") != -1) {
            menuPurview.modify = false;
        }
        if (policyPurview.indexOf("delete") != -1) {
            menuPurview.delete = false;
        }
    }
}
export  default  purviewButton;