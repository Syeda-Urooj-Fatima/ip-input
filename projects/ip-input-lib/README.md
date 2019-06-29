# **ip-input-lib**

ip-input-lib is a simple Angular library to provide enhanced user experience for IP input and its validation.

  - This library is meant for `<input>` elements of HTML form
  - Library location: `projects/ip-input-lib` directory of this repository

### Features

1. The directive automatically inserts a `.` in the IP address on completion of 3 digits in an IP sub-block.
2. The directive restricts user from entering an invalid number of digits _(i.e. greater than 3)_ in an IP sub-block.
3. On pressing the tab key:
    * A `.` is inserted and user jumps to the next sub-block of an IP address.
    * In case the current sub-block is empty, it is automatically populated with a 0 before jumping to the next sub-block or next form field.
4. The directive provides IP address validation which is visible from the validity state of the associated `<input>` when using `FormsModule` or `ReactiveFormsModule `.

### Examples/Demo
  - A sample example for IP input in template-driven forms in angular can be found in the `src/app` directory of this repository.

### Installation
```sh 
npm i ip-input-lib
```

### Usage
After installing the library, proceed with the following steps to successfully use it.

1. Register the `IpInputLibModule` in your app module and add it to the imports array of the module.
```sh
import { IpInputLibModule } from 'ip-input-lib';
@NgModule({
 declarations: [AppComponent],
 imports: [
   BrowserModule,
   FormsModule,
   IpInputLibModule
 ],
 providers: [],
 bootstrap: [AppComponent]
})
```
_**Note:** It is necessary to use at least one from amongst the `FormsModule` and `ReactiveFormsModule` to utilize the validation function of the directive._

2. The next step differs for template-driven and reactive forms.
* **Template-driven forms**
Use the directive selector `ip` in your IP `<input>` field to consume it.

* **Reactive forms**
    i. Add the following import to the typescript file that defines the form:
`import {IpInputLibDirective} from 'ip-input-lib'`
ii. Add the following validator in the synchronous validators array of your input FormControl:
`IpInputLibDirective.ipAddress`

