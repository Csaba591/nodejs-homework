/**
 * Loads the specified dependency from an object repository
 * @param objectRepository
 * @param propertyName name of dependency
 * @returns {*}
 */
function requireOption(objectRepository, propertyName) {
    if (objectRepository && objectRepository[propertyName]) {
        return objectRepository[propertyName];
    }
    throw new TypeError(propertyName + ' required');
}

module.exports = requireOption;
