// import tailwindcss from 'tailwindcss';
// export const plugins = [
//     tailwindcss('./tailwind.config.js'),
//     require('autoprefixer'),
// ];

module.exports = {
    plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('postcss-100vh-fix'),
      ]
}