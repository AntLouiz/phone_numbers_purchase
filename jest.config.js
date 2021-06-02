module.exports = {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/frontend/__mocks__/fileMock.js",
      "\\.(css|sass)$": "identity-obj-proxy"
        // "\\.(css|less)$": "<rootDir>/frontend/__mocks__/styleMock.js"
    }
}