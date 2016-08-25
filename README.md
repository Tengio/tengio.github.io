Tengio github website
=====================

Tools
-----

We use the following open source tools:

- [hugo](https://gohugo.io)
- [jquery](https://jquery.org)
- [wow](https://github.com/matthieua/WOW)
- [font-awesome](http://fontawesome.io)
- [bootstrap](http://getbootstrap.com)
- [classie](https://github.com/ded/bonzo)
- [start bootstrap](http://startbootstrap.com)

Please make sure to understand and respect the corresponding licenses if you reuse this code.

Update process
--------------

Github pages required to have all the content in the root of master branch. As we are using hugo which generate the website into the public folder we are using subtree to solve this issue.

Do changes on develop branch. Commit them and once ready to update the website switch to master branch and do:
```
git merge develop
hugo -s .
```
Then commit changes of the public folder and push them to master using substree command:
```
git subtree push --prefix public origin master
```

License
-------

(c) Copyright 2016 Tengio Limited

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
