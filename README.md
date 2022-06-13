# mgs-miniproject-react

MGS / TEAM6 / React CRA+ Redux + StyledComponent - searching news mini project

## Setting

- CreateReactApp
- redux
- react-redux
- styled-component
- redux-persist
- axios

## role

- input: 철연 성일
- news list: 영재 효정
- clip: 영배 유나

--- 
## Git&Github collaboration

### 팀장

1. 팀장역할인 사람이 repository를 만든다
2. `git flow init`으로 프로젝트를 설정
   (`Fatal: Working tree contains unstaged changes. Aborting.` 오류시 `git stash`후 `git flow init`)

```
➜ git flow init

Which branch should be used for bringing forth production releases?
   - main
Branch name for production releases: [main] Branch name for "next
release" development: [develop]

How to name your supporting branch prefixes?
Feature branches? [feature/]
Bugfix branches? [bugfix/]
Release branches? [release/]
Hotfix branches? [hotfix/]
Support branches? [support/]
Version tag prefix? []
Hooks and filters directory? [C:/Users/팀장-OS이름/Documents/dev/starbucks-clone/.git/hooks]
```

3. `develop` branch가 생성됐는지 확인하자.
4. 추가할 기능의 파일을 생성 후 `develop` branch로 `git push -u origin develop` (develop branch로 처음 push하기 때문에 -u를 사용)

5. 팀원이 issue를 처리해서 `pull request`를 보냈을 때 확인하고 파일들을 확인하고 문제되는 코드에 '+' 버튼을 눌러서 comment를 남길 수 있다.

- **이때, `Approve`는 승인이라서 조심하자. `Request change`를 submit하여 팀원에게 코드 수정을 요청한다.**
- request 페이지에서 `Changes requested` 노란색을 확인하자

6. **팀장은 해당 request에 대한 해결이 끝났으면 빨리 Merge를 해줘야한다. 그렇지 않으면 다른 작업 내용과 섞일 수 있다. 조심하자**

7. 팀원이 코드 수정해서 `request` 재요청 한 것을 확인하고 `resolve conversation`을 누른다

8. `File changed` 창에서 `viewed` 처리 한다. 이후 `Review changes`에서 `Approve`하면서 메시지를 남긴다.

9. request페이지에서 `Changes approved` 초록색을 확인하고 `Merge pull request`와 `confirm merge`를 한다.

10. `merge`를 완료했으면 ISSUE 페이지에서 `Close issue`를 누른다.

11. 팀장은 `git pull origin develop`을 통해서 팀원이 추가, 수정한 코드를 받을 수 있다.

### 팀원

1. 팀장에 repository를 `fork`한다.
2. 자신의 권한이 된 해당 repository를 `clone` 한다.
3. 현재 `main branch`만 있을텐데 `git flow init`을 통해서 `develope branch`를 생성한다.

```
➜ git flow init

Which branch should be used for bringing forth production releases?
   - main
Branch name for production releases: [main] Branch name for "next
release" development: [develop]

How to name your supporting branch prefixes?
Feature branches? [feature/]
Bugfix branches? [bugfix/]
Release branches? [release/]
Hotfix branches? [hotfix/]
Support branches? [support/]
Version tag prefix? []
Hooks and filters directory? [C:/Users/팀원-OS이름/Documents/dev/starbucks-clone/.git/hooks]
```

4. **`develop branch`는 기능이 모여지는 공간이다. 그래서 `git flow feature start 기능명`를 통해 기능에 대한 branch를 생성한다.**

5. 자신이 맡은 일에 대한 파일을 생성하여 코드를 작성한다.

6. `git status`로 자신의 상태를 확인하고 `git add 파일명` and `git commit`을 한다. `commit`할 때 **prefix**와 **commmit메시지**를 신경써서 작성한다.

7. **기능 추가를 완료했으면 `git flow feature finish 기능명`를 입력한다.**

- 이때, `Merge Commit`이 자동으로 생성된다.(feature branch에서 > develop branch로 Merge되는 것을 요청 하는 commit이다.)
  - 만약 그 기능이 `ISSUE #1` 이었다면 `Merge Commit`에서 `solve #1`이라고 commit 메시지를 남겨야한다.

8. 마무리 단계에서 `git push - u origin develop`을 입력한다

9. **또한, 기능 추가를 완료했으면 반드시 ISSUE에서 체크박스에 체크한다.** 그래야지 다른 팀원들도 확인이 가능하다.

10. Contribue 버튼에 `open pull request` 또는 초록버튼 `Compare & pull request`를 누른다.

- request 보낼 때 **팀원 repository에서 > 팀장 repository로 보내는 것이다. 주의해서 하자! 이때 branch는 'develop'이다! main 아니다! 주의하자**
- title에는 '기능명과 한 일을 간략히 적는다', comment에는 `close #1`이라고 적는다.(해당 issue가 #1 이라면)
- 이후 `Create pull request`를 누른다.

11. request 페이지에서 '초록색'이면 `merge 가능`한 상태, '회색'이면 `conflict 상태`이다.

- `conflict`가 발생했을 때 팀원이 코드를 고쳐서 다시 request를 보내야한다.

12. `pull request`를 보낸 이후 팀장이 코드 리뷰를 하면서 `comment`를 달았다면 요청사항을 확인한다.

- 먼저 확인했다는 `comment`를 다시 보내준다.
- 그리고 코드를 수정한다.
  - `git status, git add 파일명, git commit`을 하자. (commit message 잘쓰자)
  - `git push origin develop`을 하면 그 팀원이 작업했던 내역 아래에 이어서 붙는다.(request 페이지에서)

13. `git remote -v`를 해서 upstream이 있는지 확인하자.

14. `upstream`이 없다면 제2 팀원, 제3 팀원 모두 `git remote add upstream 팀장주소`를 통해 팀장 것을 `pull`받을 수 있게 설정해야 한다.

- ex. `https://github.com/youngcodej22/starbucks-clone.git`

15. 자신의 repository를 최신으로 유지 할 수 있게 해야한다. `git pull upstream develop`

## ISSUE 작성 Tip

동료들과 작업하고 있는 상황에 대해 게시판에 글 남기듯 공유를 할 수 있다.

#### 무엇을 작성할 것인지?

Github 공식 문서에서 issue는 다음과 같이 정의한다.

> Use Github Issues to track ideas, feedback, tasks, or bugs for work on Github. Issues let you track your work on Github, where development happens.

- 발견된 버그
- 추가할 기능
- 피드백
- 개발해야할 새로운 이슈 및 설계

#### ISSUE Menu

- New Issue

  - 이슈 생성

- Assignees
  - 해당 이슈에 대한 책임을 물려받을 사람. 즉 팀장이 팀원에게 이슈를 처리하라고 넘겨주는 것이다. (팀장이 ISSUE를 작성한다.)

## Commit Convention (prefix)

- feat: 기능 개발 관련 (새로운 기능 추가)
- fix: 오류 개선 혹은 버그 패치
- docs: 문서화 작업
- style: 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
- test: test 관련 (테스트코드, 리펙토링 테스트 코드 추가)
- refactor: 리팩토링
- conf: 환경설정 관련
- chore: 빌드 업무 수정, 패키지 매니저 수정
- build: 빌드 관련
- ci: Continuous Integration 관련

예시

- feat: Add server.py
- fix: Fix Typo server.py
- docs: Add README.md, LICENSE
- conf: Create .env, .gitignore, dockerfile
- BREAKING CHANGE: Drop Support /api/v1
- refactor: Refactor user classes

---

### 참고 자료

- [우영 선생님-cowork with git flow](https://www.youtube.com/watch?v=lUWHNtmos5o)
- [issue 다루기](https://hbase.tistory.com/211)
- [Git Commmit Message Style Guide](https://udacity.github.io/git-styleguide/)
