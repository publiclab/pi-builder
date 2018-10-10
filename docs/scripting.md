# Scripting

The operating system installed is Raspbian Lite, a derivative of the popular Debian GNU/Linux distribution. Please refer to the Debian documentation for most configuration needs. *This section attempts to introduce basic recipes to make use of scripts*.

You'll need to access the terminal emulator in order to execute scripts (or schedule them). You may access the console with a SSH client or from the web terminal (if available). You may also copy files from and into the device with an SFTP client (such as `scp`).

# Writing scripts

Scripts can be written in any language included with Raspbian. The default shell is called **bash** and it's common among GNU/Linux systems.

In Debian, you may place custom scripts in the `/usr/local/bin` directory. This will make it available to all users.
Scripts should have execution privileges enabled. Execution privileges are granted with the `chmod a+x script.sh` (where `script.sh` is the script file).

**Tip**: If you are trying to run a script located in the current directory, you'll need to call it like this: `./my_script.sh` (with "./" to indicate the current directory)

# Running scripts on startup

Once your scripts are properly installed in the `/usr/local/bin` directory and work as intended, you may want to start them at boot time. You may do so by adding a line to `/etc/rc.local` which is run at the end of the boot process.

# Scheduling scripts to be run at intervals

It's possible to use the Cron daemon to schedule tasks either from root or as a user. Use the command `crontab -e` to edit the current users's cron entry. The basic syntax for a cron entry is:

`minute hour day-of-month month day-of-week user command`

Refer to the Cron manual for details (`man cron`).

# Running a script every few seconds

Try the `watch` command. It works as `watch -n seconds command` and runs a given command repeatedly and continually.
