const AccessControl = require("accesscontrol");
const ac = new AccessControl();

exports.roles = (function() {
  ac.grant("user_basic")
    .readOwn("profile")
    .updateOwn("profile")

  ac.grant("user_admin")
    .extend("user_basic")
    .readAny("profile")

  ac.grant("super_admin")
    .extend("user_basic")
    .extend("user_admin")
    .updateAny("profile")
    .deleteAny("profile")

  return ac;
})();
