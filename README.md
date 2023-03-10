# 방문해주셔서 감사합니다!

## 한국어

> 이 보일러플레이트는 다음과 같은 기반으로 제작되었습니다.
> npx react-native init boilerPlate --template react-native-template-typescript
> 아래는 주로 사용된 라이브러리 목록입니다. @types는 제외하였습니다.

```
react: 18.1.0,
react-native: 0.70.6,
axios: ^1.2.1, for 네트워킹
moment: ^2.29.4, for 날짜 및 시간
@gorhom/bottom-sheet: ^4, for bottomsheet
reanimated-bottom-sheet: ^1.0.0-alpha.22, for bottomsheet
react-native-gesture-handler: ^2.8.0, for 터치이벤트
styled-components: ^5.3.6, for style
@react-native-async-storage/async-storage: ^1.17.11, for 저장소
@react-native-community/datetimepicker: ^6.7.1, for 날짜 및 시간
@react-navigation/native: ^6.1.1,
@react-navigation/native-stack: ^6.9.7, for Screen
react-native-reanimated: ^2.13.0, for bottomsheet
react-native-responsive-fontsize: ^0.5.1 for 반응형 폰트사이즈
react-native-dotenv: ^3.4.6 for .env 사용
```

> 자세한 사항은 package.josn 파일을 확인 해주시면 감사하겠습니다.

> 세팅된 내역은 아래와 같습니다.
>
> - 안드로이드 다크테마 기본 Text가 표기되지 않는 문제가 수정되었습니다.
> - 바텀시트가 추가되었습니다.
> - Styled component가 세팅되었습니다.
> - 화면 크게보기를 대응하기위한 responsive-font-size가 추가되었습니다.
> - HTTP 통신을 위해 axios가 적용되었습니다.

<br/><br/>

#### 필독사항

> .env를 사용하기위해 env.d.ts 파일에 타입을 꼭 추가해주시고 babel.config.js 파일내에 플러그인이 추가되었는지 꼭 확인해주세요.

<br/><br/>

<hr/>

<br/><br/><br/>

## English

> This boilerplate use TypeScript

> The boilerplate is built on the following basis
> npx react-native init boilerPlate --template react-native-template-typescript
> Below is a list of libraries that have been used primarily. @types excluded.

```
react: 18.1.0,
react-native: 0.70.6,
axios: ^1.2.1, for networking
moment: ^2.29.4, for datetime
@gorhom/bottom-sheet: ^4, for bottomsheet
reanimated-bottom-sheet: ^1.0.0-alpha.22, for bottomsheet
react-native-gesture-handler: ^2.8.0, for touch event
styled-components: ^5.3.6, for style
@react-native-async-storage/async-storage: ^1.17.11, for storage
@react-native-community/datetimepicker: ^6.7.1, for datepicker
@react-navigation/native: ^6.1.1,
@react-navigation/native-stack: ^6.9.7, for Screen
react-native-reanimated: ^2.13.0, for bottomsheet
react-native-responsive-fontsize: ^0.5.1 for responsive fontsize
axios: ^1.2.1 http module
react-native-dotenv: ^3.4.6 for .env
```

> For more information, please check the package.josn file.

> The setting details are as follows.
>
> - Fixed an issue where Android Dark Theme Basic Text is not displayed.
> - Bottom Sheet Added.
> - Styled component has been set.
> - The response-font-size has been added to accommodate the larger screen.
> - Axios has been applied for HTTP communication.

<br/><br/>

#### discription

> To use .env, make sure to add the type to the file env.d.ts and check the plugin in the babel.config.js file.
