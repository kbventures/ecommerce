# E-commerce Site

This is a sample e-commerce store with all of the main functionlities of an E-commerce site. You can browse through items, add items to a basket and even checkout items using Stripe.

## Documentation for How to Contribute Using Git

1. Clone the repository with this command if you don't have it:

   ```shell
   git clone https://github.com/kbventures/ecommerce.git
   ```

2. Run the following command to make sure you have the latest changes on the main branch

   ```shell
   git pull
   ```

3. Create a new feature branch with a descriptive name and only make your changes here. For example, to add this README documentation I would call this branch `add-git-workflow`.

   ```shell
   git checkout -b <your feature branch name>
   ```

4. Make as many changes as you need in your feature branch. You can use the following commands per commit message.

   ```shell
   git add .
   git status
   git commit -m <your commit message>
   ```

5. Once your feature is ready and you're ready to merge into the main branch first make sure to push your local branch changes to GitHub's computers.

   ```shell
   git push --set-upstream origin <your feature branch name>
   ```

6. Go to https://github.com/kbventures/ecommerce/branches and you should see your newly pushed feature branch. Find and click the button "New pull request" to request for your changes to be "pulled" into the main branch.

7. When you click the button, complete the form required for each pull request and click "Create pull request".

8. In the top-right corner click "Reviewers" and add one person on the team as a reviewer for the pull request.

9. Once the Reviewer has looked at your pull request and verified everything is OK, they will merge your pull request into the main branch.
