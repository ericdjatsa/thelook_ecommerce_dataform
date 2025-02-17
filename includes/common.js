/* 
 * The function ageBucket() takes as input the name of the age field and returns a CASE statement that maps ages age buckets
 * You can learn more about functions on https://cloud.google.com/dataform/docs/reuse-code-includes
 */

function ageBucket(age) {
  const age_clean = `cast(${age} as int64)`;
  return `case
            when ${age_clean} < 12 then "Kids"
            when ${age_clean} between 12 and 20 then "Teenagers"
            when ${age_clean} between 21 and 30 then "Young Adults"
            when ${age_clean} between 31 and 60 then "Adults"
            when ${age_clean} > 61 then "Elderly"
          end`;
}

module.exports = {
  ageBucket
};